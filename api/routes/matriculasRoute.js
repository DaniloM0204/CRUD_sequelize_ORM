const { Router } = require('express');
const MatriculasController = require('../controllers/MatriculasController');

const router = Router();

router //Matriculas
.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)

module.exports = router