import puppeteer from 'puppeteer';
import writeCsvFile from './makeCSVFIle';

async function getNotes(matricula: string, curp: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://alumno.conalep.edu.mx/saac');
  await page.waitForSelector('input#inputMatricula');
  await page.type('input#inputMatricula', matricula);
  await page.waitForSelector('input#inputCurp');
  await page.type('input#inputCurp', curp);

  await page.waitForSelector('button.btn.btn-default');
  await page.click('button.btn.btn-default');

  await page.waitForNavigation();
  await page.goto(
    'https://alumno.conalep.edu.mx/saac/home/academico/historial/'
  );

  let semester = await page.evaluate(() => {
    let last_semester = document
      .querySelectorAll(
        'div[role="tabpanel"] div.col-xs-12 h2.title__style--2'
      )!
      .item(0) as HTMLHeadingElement;

    return last_semester.innerText;
  });
  await page.waitForSelector('div[role="tabpanel"] div.col-xs-12');
  const table = await page.evaluate(() => {
    let last_semester = document.querySelector(
      'div[role="tabpanel"] div.col-xs-12'
    )!;

    return last_semester.querySelector('table')!.innerText;
  });

  let data = table
    .split('\n')
    .slice(1, table.split('\n').length)
    .map((line) => {
      const [materia, docente, calendario, periodo_escolar, calificacion] =
        line.split('\t');

      return {
        materia,
        docente,
        calendario,
        periodo_escolar,
        calificacion,
      };
    });

  writeCsvFile(data, `calificaciones-${matricula} del ${semester}.csv`);

  await browser.close();
}

export default getNotes;
