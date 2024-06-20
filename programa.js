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
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarLembrete()
				break
			case '2':
				listarLembrete()
				break
            case '3':
                editarLembrete()
                break
            case '4':
                marcarConcluido()
                break
            case '5':
                rl.close()
			break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirLembrete()
				break
		}
	})
}

//Murilo

function cadastrarLembrete(){
	rl.question('Qual é o seu lembrete?' , (lembrete) => {
		rl.question('Qual o prazo para você fazer isso?' , (prazo) => {
			rl.question('Você ja concluiu sua tarefa?' , (concluido) =>{
				lembretes.push({lembrete: lembrete, prazo: prazo,concluido: concluido })
				console.log('Lembrete cadastrado!')
				exibirLembretes()
			})
		})
	})
}