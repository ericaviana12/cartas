/**
 * Sorteio de uma carta
 * Exemplo de uso de um array (vetor)
 * @author Erica Viana
 */

function sortear() {
    let nipes=['♥','♦','♣','♠']
    let faces = ["A", "2", "3","4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    // Sorteio do índice do vetor (array) - sortear nipe
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)] // Sorteio do 0 - ♥, 1 - ♦, 2 - ♣ ou 3 - ♠

    // Sorteio do índice do vetor (array) - sortear face
    let faceSorteada = faces[Math.floor(Math.random() * 13)] // Sorteio do 0 (A) ao 13 (K)

    // console.clear()
    // console.log(`${faceSorteada} de ${nipeSorteado}`) // Exibir a face e nipe sorteados

    // Determinar a cor com base no nipe sorteado
    let cor
    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000'
    }

    // Renderizar o canto superior esquerdo da carta
    // A linha abaixo adiciona a div identificada como 'supEsq' a face e o nipe sorteado e também tags <div> adicionais
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    // A linha abaixo muda o CSS referente a tag identificada
    document.getElementById('supEsq').style.color = cor

    // Renderizar o centro da carta
    let cc = document.getElementById('centroCarta')
    if (faceSorteada === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`
    } else if (faceSorteada === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (faceSorteada === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    } else {
            cc.innerHTML = `${nipeSorteado}`
    // A linha abaixo muda o CSS referente a tag identificada
    document.getElementById('centroCarta').style.color = cor
    }

    // Renderizar o canto inferior direito da carta
    // A linha abaixo adiciona a div identificada como 'infDir' a face e o nipe sorteado e também tags <div> adicionais
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    // A linha abaixo muda o CSS referente a tag identificada
    document.getElementById('infDir').style.color = cor
}
