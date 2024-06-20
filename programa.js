const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let lembretes = []
// exibe o catálogo de opções do menu
function exibirLembretes() {
	console.log(`
	Menu:
	1. Adicionar lembrete
	2. Listar lembretes 
    3. Editar lembretes
    4. Marcar lembretes como concluído
    5. Sair
	`)}