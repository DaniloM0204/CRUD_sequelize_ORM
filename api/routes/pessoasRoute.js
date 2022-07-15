const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router // Pessoas
.get('/pessoas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.get('/pessoas/:estudanteId/matricula/', PessoaController.pegaMatriculas)
.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas', PessoaController.criaPessoa)
.delete('/pessoas/:id', PessoaController.apagaPessoa)


router //Matriculas
.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)

module.exports = router