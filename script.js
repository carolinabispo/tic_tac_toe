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

 
//    const c1 = document.getElementById("c1");
//    c1.addEventListener('click', function() {
    
//     if (c1.innerHTML === '') {
//         c1.innerHTML = jogadorX;
//     }else if(jogadorX === 'x'){
//       jogadorX = 'o'
//     }else{
//       jogadorX = 'x'
//     }
// });
   
//   const c2 = document.getElementById("c2");
//   c2.addEventListener('click', function() {
//     if (c2.innerHTML === '') {
//       c2.innerHTML = jogadorX;
//   }else if(jogadorX === 'x'){
//     jogadorX = 'o'
//   }else{
//     jogadorX = 'x'
//   }
// });
  // const c3 = document.getElementById("c3").value;
  // const c4 = document.getElementById("c4").value;
  // const c5 = document.getElementById("c5").value;
  // const c6 = document.getElementById("c6").value;
  // const c7 = document.getElementById("c7").value;
  // const c8 = document.getElementById("c8").value;
  // const c9 = document.getElementById("c9").value;

  // // desativar celulas apos fim de jogo
  // const d1 = document.getElementById("c1");
  // const d2 = document.getElementById("c2");
  // const d3 = document.getElementById("c3");
  // const d4 = document.getElementById("c4");
  // const d5 = document.getElementById("c5");
  // const d6 = document.getElementById("c6");
  // const d7 = document.getElementById("c7");
  // const d8 = document.getElementById("c8");
  // const d9 = document.getElementById("c9");
  // // condiçoes de vitoria row1

  // if (c1 === "x" && c4 === "x" && c7 === "x") {
  //   document.getElementById("winner").innerHTML = winnerX;
  //   console.log("player x ganhou");
  //   d2.disabled = true;
  //   d3.disabled = true;
  //   d5.disabled = true;
  //   d6.disabled = true;
  //   d8.disabled = true;
  //   d9.disabled = true;

  //   d1.style.backgroundColor = "green";
  //   d4.style.backgroundColor = "green";
  //   d7.style.backgroundColor = "green";

  // } else if (c2 === "x" && c5 === "x" && c8 === "x") {
  //   document.getElementById("winner").innerHTML =("Player X ganhou");
  //   console.log("aa");
  //   d1.disabled = true;
  //   d3.disabled = true;
  //   d4.disabled = true;
  //   d6.disabled = true;
  //   d7.disabled = true;
  //   d9.disabled = true;

  //   d2.style.backgroundColor = "green";
  //   d5.style.backgroundColor = "green";
  //   d8.style.backgroundColor = "green";

  // }else if(c3 === 'x' && c6 ==='x' && c9=== 'x'){
  //   document.getElementById("winner").innerHTML =("Player X ganhou");
  //   console.log();
  //   d1.disabled = true;
  //   d2.disabled = true;
  //   d4.disabled = true;
  //   d7.disabled = true;
  //   d8.disabled = true;
  //   d5.disabled = true;

  //   d3.style.backgroundColor = "green";
  //   d6.style.backgroundColor = "green";
  //   d9.style.backgroundColor = "green";
  // }


}
