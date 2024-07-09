let matricula_regex = /^\d{9}-\d{1}$/;
let curp_regex = /^[A-Z]{4}\d{6}[A-Z0-9]{8}$/;

async function getData(): Promise<{ matricula: string; curp: string }> {
  let gotMatricula: boolean = false;
  let gotCURP: boolean = false;

  console.log('Indica tu matricula: ');

  let matricula_input = await new Promise((resolve, reject) => {
    process.stdin.on('data', (data) => {
      if (!gotMatricula) {
        let input = data.toString().trim();
        if (matricula_regex.test(input)) {
          resolve(input);
          gotMatricula = true;
        } else {
          console.log('La matricula no es valida, intenta de nuevo.');
        }
      }
    });
  });

  console.log('Indica tu CURP: ');
  let curp_input = await new Promise((resolve, reject) => {
    process.stdin.on('data', (data) => {
      if (!gotCURP) {
        let input = data.toString().trim();
        if (curp_regex.test(input)) {
          resolve(input);
          gotCURP = true;
        } else {
          console.log('La CURP no es valida, intenta de nuevo.');
        }
      }
    });
  });

  console.log({
    matricula: matricula_input,
    curp: curp_input,
  });

  process.exit(0);
}

getData().then((data) => {
  console.log(data);
});
