# Obtener tus calificaciones de conalep haciendo web scrapping.

> Disclaimer: Este proyecto es un ejemplo de cómo hacer web scrapping. No es una forma oficial de obtener tus calificaciones de conalep. El abuso de esta herramienta puede resultar en consecuencias legales.

## ¿Qué es web scrapping?

Web scrapping es el proceso de extraer información de un sitio web. Para hacer web scrapping, necesitas un navegador web como Chrome, Firefox, Safari, Opera, etc.

## ¿Cómo funciona?

Para hacer web scrapping, primero debes abrir el navegador web y ingresar a la página web de la cual deseas extraer información. Luego, debes hacer clic en el botón "Inspect" o "Inspect Element" (`CTRL + I` | `[Fn +] F12`) para acceder al código fuente del sitio web. Después de hacer clic en el botón, debes copiar y pegar el código fuente en un archivo de texto. Luego, abre el archivo de texto en un editor de texto y busca la información que deseas extraer.

Pero claro, no es tan fácil de hacer por nuestra cuenta. Por ello existen librerias para JavaScript/TypeScript (en este caso) que hacen web scrapping muy fácil. En este ejemplo, usaremos la librería Puppeteer.

## ¿Cómo uso este script?

Para usar este script, debes clonar este repositorio en tu computadora o dispositivo. Luego, debes ejecutar el siguiente comando en tu terminal:

```bash
npm start
```

Esto iniciará el script y mostrará un mensaje que te solicitará tus datos, estos son la CURP y tu matricula de conalep.

Una vez que ingreses los datos, el script comenzará a extraer tus calificaciones de conalep. Y te las guardará en un archivo llamado "calificaciones-[matricula].csv", que sí, es una hoja de cálculo / exel.

### Ejemplo del archivo "calificaciones-[matricula].csv"

![Ejeplo de archivo calificaciones](https://i.imgur.com/vNxPuWJ.png)

## TODO

- [x] Extraer calificaciones de conalep
- [x] Interfaz CLI
- [ ] Selección libre de semestre
- [ ] Validar datos de matricula y CURP según respuesta de la pagina.
