let jogador = 'x'


const clickBoard = () => {
  
  const conditions = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,5,2]
  ]

  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cell.addEventListener('click', function() {
        // Verifica se a célula está vazia
        if (cell.innerHTML === '') {
            // Define o conteúdo da célula como jogadorX
            cell.innerHTML = jogador;

            // Verifica se o jogador atual ganhou após cada jogada
            for(let i = 0; i < conditions.length; i++) {
                const condition = conditions[i];
                if (condition.every(pos => cells[pos].innerHTML === jogador)) {
                  window.open(`https://youtu.be/orWnzqBA63w?si=9e3lgKiPBz2AOiYo`,"_blank") =

                  // document.getElementById('winner').innerHTML = `Vencedor: ${jogador.toLocaleUpperCase()}` 
                    console.log(`${jogador} ganhou`);
                   
                }
            }

            // Alterna entre 'x' e 'o' para o próximo jogador
            jogador = (jogador === 'x') ? 'o' : 'x';
        }
    });
});

const btn = document.getElementsByClassName('btn-1')

btn.addEventListener('click',function() {
  document.getElementById('cell').innerHTML = ''
})
}
