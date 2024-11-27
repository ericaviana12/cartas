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

}
