const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { response } = require("express");

var alunos = [];

const app = express();
app.use(bodyParser.json());

app.get("/getAllAlunos", function (req, res) {
    res.send(alunos);
});

app.get("/getAlunosById", function (req, res) {

    var response = null;

    for (let index = 0; index < alunos.length; index++)
        if (alunos[index].id == req.body.id)
            response = alunos[index];

    res.send(response);
});

app.put("/putAlunos", function (req, res) {

    for (let index = 0; index < alunos.length; index++)
        if (alunos[index].id == req.body.id) {
            alunos[index].nome = req.body.nome;
            alunos[index].matricula = req.body.matricula;
            alunos[index].serie = req.body.serie;
        }

    res.send();
});

app.post("/postAlunos", function (req, res) {

    var id = crypto.randomUUID();
    const obj = { id, ...req.body }

    alunos.push(obj);
    res.send(obj);
});

app.delete("/deleteAlunos", function (req, res) {

    for (let index = 0; index < alunos.length; index++)
        if (alunos[index].id == req.body.id)
            alunos.splice(index, 1);

    res.send();
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local, na porta 3000"));