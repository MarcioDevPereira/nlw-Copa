function createGame(player1, hour, player2) {
return `
<li>
  <img src="./${player1}.svg" alt="${player1}">
  <strong>${hour}</strong>
  <img src="./${player2}.svg" alt="${player2}">
  </li>
`
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-daley: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>  
        </div>
  `
}

document.querySelector('#cards').innerHTML =
    createCard('20/11', 'domingo',
       createGame("catar", "13:00", "equador")
       ) +
    createCard('21/11', 'segunda',
       createGame("inglaterra", "10:00", "ira") + createGame("senegal", "13:00", "holanda") + createGame("eua", "16:00", "gales")
       ) +
    createCard('22/11', 'terça',
      createGame("argentina", "07:00", "arabia") + createGame("mexico", "10:00", "polonia") + createGame("dinamarca", "13:00", "tunisia") + createGame("franca", "16:00", "australia")
    ) +
    createCard('23/11', 'quarta',
      createGame("marrocos", "07:00", "croacia") + createGame("alemanha", "10:00", "japao") + createGame("espanha", "13:00", "costa-rica") + createGame("belgica", "16:00", "canada")
    )


