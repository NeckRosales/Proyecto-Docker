//Crear una función en JavaScript que lea un archivo html y lo muestre en un servidor
//Alumno: Vivas Rosales Neck Manuel
//Grado y Grupo: 4to B

const express = require('express');
const fs = require('fs');
const app = express();
const localhost = (html) => { 
  app.get('/', (req, res) => {
    fs.readFile(`${__dirname}/${html}`, (err, data) => {
      res.end(data);
  });
})
}
localhost('servidor.html');
app.listen(3000, () => {
  console.log(`corriendo en el puerto 3000`);
});