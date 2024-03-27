const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;


//Pagina principal
app.get('/', (req, res) => {

res.send(`<h1 style= "color:green">Hola bienvenido a la pagina principal</h1>
<h3 style= "color:red">Existen estas direcciones:</h3>
<h2> /form   y  /redirect  </h2>
`)});

//form
app.get('/form', (req, res) => {

    console.log('=====================================');
    console.log(req.url);
    console.log('=====================================');

    res.send(`

  <h2>Formulario de Contacto</h2>

  <form id="formulario" action="/submit" method="post">
      <label for="nombre">Nombre:</label><br>
      <input type="text" id="nombre" name="nombre"><br><br>
      
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>
      
      <label for="mensaje">Mensaje:</label><br>
      <textarea id="mensaje" name="mensaje"></textarea><br><br>
      
      <input type="submit" value="Enviar">
  </form>

    `);


});


//redirect
app.get("/redirect", (req, res) => {
  console.log("========================================================================");
  console.log(req.url);
  console.log("========================================================================");

  res.redirect("./")
})







app.listen(PORT, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});





