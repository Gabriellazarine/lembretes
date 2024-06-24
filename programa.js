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

// Gabriel

function editarLembrete() {
    if(jogos.length == 0) {

    } else {
        rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
            if(numero > 0 && numero <= lembretes.length) {
                rl.question('digite o novo lembrete:', (lembrete) =>{
                rl.question('digite o novo prazo:', (prazo) =>{
                rl.question('digite se já concluiu a tarefa:', (concluido) =>{
                    lembretes[numero -1] = {
                    lembrete,
                    prazo,
                    concluido
                    } 
                    console.log('editado com sucesso')
                    exibirLembretes()
                })
            })
        })
    } else {
        console.log('Número inválido, tente novamente')
        exibirLem()
    }
})
}
}