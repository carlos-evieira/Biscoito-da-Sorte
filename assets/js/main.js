

const phrases = ['A vida trará coisas boas se tiver paciência.', 'Não há que ser forte. Há que ser flexível.', 'Siga os bons e aprenda com eles.', 'Você é do tamanho do seu sonho.', 'Nós somos o que pensamos.', 'Você sempre será a sua melhor companhia!', 'Não compense na ira o que lhe falta na razão.', 'A sorte favorece a mente bem preparada.', 'A maior de todas as torres começa no solo', 'Espere pelo mais sábio dos conselhos: o tempo.']



const cookie = document.getElementById('open-cookie')
const button = document.getElementById('new-cookie')
const message = document.querySelector('.message')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')




function HandleChangeScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function rand(array) {
  const randomNumber = Math.floor(Math.random() * phrases.length)

  //  acessamos um índice aleatório gerado pelo randomNumber
  return array[randomNumber]
}


cookie.addEventListener("click", (event)=>{
  HandleChangeScreen()
  message.innerText = rand(phrases)
  

})

document.addEventListener('keydown', (event)=>{
  if(event.key == 'Enter'){
    HandleChangeScreen()
    message.innerText = rand(phrases)
    
  }
})

button.addEventListener("click", (event)=>{
  HandleChangeScreen()

})













// const randomNumber = Math.round(Math.random() * 10)