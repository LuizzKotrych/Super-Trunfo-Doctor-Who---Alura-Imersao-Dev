var cartaLuiz = {
  nome: "The Doctor",
  imagem: "https://i.imgur.com/OImWUYl.jpg",
  atributo: {
    ataque:80,
    defesa:60,
    tech:90,}
 }

var cartaPC = {
  nome: "Dalek",
  imagem: "https://i.imgur.com/HbXGGqo.jpg",
  atributo: {
    ataque:90,
    defesa:85,
    tech:95,}
}

var cartaPC2 = {
  nome: "Cybermen",
  imagem: "https://i.imgur.com/zKhuD0Q.jpg",
  atributo: {
    ataque:86,
    defesa:80,
    tech:80,}
}

var cartaMaquina
var cartaJogador
var cartas = [cartaLuiz, cartaPC, cartaPC2]

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaMaquina) {
  numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas [numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributo) {
    opcoesTexto += "<input type = 'radio' name = 'atributo' value = '" + atributo + "'>" + atributo   
  }
  opcoesTexto += "</p>"
  opcoesTexto += "<div class='lista'>" + "<img src=" + cartaJogador.imagem + " height='395' width='248' >"
 opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  if (cartaJogador.atributo[atributoSelecionado] > cartaMaquina.atributo[atributoSelecionado]) {
    alert ('Hooray! Você venceu!')
  }else if (cartaJogador.atributo[atributoSelecionado] < cartaMaquina.atributo[atributoSelecionado]) {
    alert('Ouch...Você perdeu!')
  }else{
    alert('Empate!')
  }
  console.log(cartaMaquina)
}