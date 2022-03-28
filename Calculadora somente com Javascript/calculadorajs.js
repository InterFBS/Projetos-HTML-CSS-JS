// Criando uma calculadora somente com javascript

function calculadora() {

	// definindo as operações e pegando valor de entrada do usuário
	// usar " \n " para fazer quebra uma quebra de linha
	const operacao = Number(prompt('Escolha uma opção: \n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
	
	// verificar se a operação é válida
	if (!operacao || operacao >=7) {
		alert('erro - operacão inválida');
		calculadora();
	} else {
	
		// definir as variáveis
		// todas as entradas serão do tipo number
		let n1 = Number(prompt('Insira o primeiro valor:'));
		let n2 = Number(prompt('Insira o segundo valor:'));
		let resultado;

		// verificar se as variáveis são válidas
		if(!n1 || !n2) {
			alert('erro - valores inválidos');
			calculadora();
		} else {
			// defnindo as funções
			function soma() {
				resultado = n1 + n2;
				
				//mostrando o resultado usando template strings
				alert(`${n1}+ ${n2} =${resultado}`);
			}
			function subtração() {
				resultado = n1 + n2;
				
				//mostrando o resultado usando template strings
				alert(`${n1}+ ${n2} =${resultado}`);
			}
			function multiplicação() {
				resultado = n1 + n2;
				
				//mostrando o resultado usando template strings
				alert(`${n1}+ ${n2} =${resultado}`);
			}function divisaoReal() {
				resultado = n1 + n2;
				
				//mostrando o resultado usando template strings
				alert(`${n1}+ ${n2} =${resultado}`);
			}
			function divisaoInteira() {
				resultado = n1 + n2;
				
				//mostrando o resultado usando template strings
				alert(`${n1}+ ${n2} =${resultado}`);
			}
			function potenciação() {
				resultado = n1 + n2;
				
				//mostrando o resultado usando template strings
				alert(`${n1}+ ${n2} =${resultado}`);
			}

					
		}
	}
}