const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = 3300 || process.env.PORT ;
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const connection  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'restauracja'
});

app.listen(port);

app.get('', (req, res) => {
  connection.query('SELECT d.nazwa as nazwa,d.cena as cena,d.opis as opis,d.img as img,k.nazwa as kategoria,k.img as catimg,d.idkategoria as idkategoria FROM dania d INNER JOIN kategoria k ON d.idkategoria = k.idkategoria',(err,rows)=>{
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

app.post('/kontakt',function(req,res)
{
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;
  let rating = req.body.rating;

  let sql = "INSERT INTO klient(tozsamosc,temat,email,opinia,ocena) VALUES('"+name+"', '"+subject+"','"+email+"','"+message+"','"+rating+"')";
  connection.query(sql, function (err, result) {
      console.log("1 record inserted");
      res.end();
  });

})

app.get('/opinie', (req, res) => {
  connection.query('SELECT tozsamosc, email, temat, opinia, ocena FROM klient',(err,rows)=>{
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});