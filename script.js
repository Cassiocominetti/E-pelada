let jogadores = []
let numeroDeTimes = 2

function adicionarJogador() {
  let jogador = document.getElementById('nomeJogador').value
  jogadores.push(jogador)
  document.getElementById('nomeJogador').value = ''
  document.getElementById('jogadores').innerHTML = jogadores.join(', ')
}

function dividirTimes() {
  let times = []
  for (let i = 0; i < numeroDeTimes; i++) {
    times[i] = []
  }

  for (let i = jogadores.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[jogadores[i], jogadores[j]] = [jogadores[j], jogadores[i]]
  }

  for (let i = 0; i < jogadores.length; i++) {
    times[i % numeroDeTimes].push(jogadores[i])
  }
  for (let i = 0; i < numeroDeTimes; i++) {
    document.getElementById('time' + (i + 1)).innerHTML =
      'Time ' + (i + 1) + ': ' + times[i].join(', ')
  }
}

function setNumeroDeTimes(num) {
  numeroDeTimes = num
}

function resetar() {
  jogadores = []
  document.getElementById('nomeJogador').value = ''
  document.getElementById('jogadores').innerHTML = ''
  for (let i = 0; i < numeroDeTimes; i++) {
    document.getElementById('time' + (i + 1)).innerHTML = ''
  }
}
