"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var porta = 3000;
var tasks = [
    { id: 1, description: 'Fazer compras' },
    { id: 2, description: 'Estudar Node.Js' },
    { id: 3, description: 'Praticar programação' }
];
app.use(express.json());
// rota para listar todas as tarefas
app.get('/tasks', function (req, res) {
    res.json(tasks);
});
// rota para adicionar uma tarefa
app.post('/tasks', function (req, res) {
    var newTask = req.body; // Obtem os dados da nova tarefa do corpo da requisição
    tasks.push(newTask); // Adiciona a nova tarefa à lista de tarefas
    res.json(newTask); // retorna a nova tarefa como resposta
});
// rota para atualizar uma tarefa
app.put('/tasks/:id', function (req, res) {
    var taskId = parseInt(req.params.id); // Obtém o ID da tarefa da URL
    var updatedTask = req.body; // Obtém os novos dados da tarefa do corpo da requisição
    var taskToUpdate = tasks.find(function (task) { return task.id === taskId; }); // Encontra a tarefa com o ID correspondente
    if (!taskToUpdate) {
        res.status(404).send('Tarefa não encontrada'); // Se a tarefa não for encontrada, retorna um erro 404
        return;
    }
    taskToUpdate.description = updatedTask.description; // Atualiza a descrição da tarefa
    res.json(taskToUpdate); // Retorna a tarefa atualizada como resposta
});
// rota para excluir uma tarefa
app.delete('/tasks/:id', function (req, res) {
    var taskId = parseInt(req.params.id);
    var taskIndex = tasks.findIndex(function (task) { return task.id === taskId; });
    if (taskIndex === -1) {
        res.status(404).send('Tarefa não encontrada');
        return;
    }
    tasks.splice(taskIndex, 1); // remove tarefa da lista
    res.sendStatus(204); //Retorna uma resposta de sucesso (codigo 204)
});
//inciando o servidor
app.listen(porta, function () {
    console.log(tasks);
    console.log("Servidor Express rodando em http://localhost:".concat(porta));
});
