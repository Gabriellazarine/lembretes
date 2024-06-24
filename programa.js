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
function marcarConcluido() {
	if (lembrete.length == 0) {
	console.log('Não há lembretes.')
	exibirMenu()
	} else {
		for (let i = 0; i < lembrete.length; i++) {
			console.log('Lista de lembretes')
				funcionarios.forEach((lembretes, index) => {
					console.log(`${index + 1}. ${lembretes.nome}`)
	})
	rl.question('Digite o lembrete que deseja remover: ', (remover) => {
	if (remover > 0 && remover <= lembretes.length) {
	lembretes.splice(remover - 1, 1)
	console.log('Lembrete removido com sucesso!')
	exibirMenu()
	} else {
	console.log('Opção Inválida, digite novamente')
	exibirMenu()
	}
	})
	}
	}
}





