
// DOM
// Document Object Model

function pegarTweet(event){
    event.preventDefault()
    const tweetTxt = textarea.value
    criarTweet(tweetTxt)
}

function criarTweet(tweetTxt){
    let data = new Date()
    let hora = data.getHours()
    let min  = data.getMinutes()

    const tweet = {
        nome: "Bruce Wayne",
        foto: "./assets/img/wayne.jpg",
        usuario: "@brucewayne",
        texto:tweetTxt,
        tempo:`${hora}:${min}`
    }
    listarTweet(tweet)
}

function listarTweet(tweet){
    const {nome,foto,usuario,texto,tempo} = tweet  // Espalha infos (desestrutura)

    let li   = document.createElement("li")
    li.classList.add("conteudoPrincipal__post")

    let img  = document.createElement("img")
    img.src = foto
    img.classList.add("post__img")

    let div  = document.createElement("div")
    div.classList.add("post__conteudo")

    let h2   = document.createElement("h2")
    h2.innerText = nome;

    let span = document.createElement("span")
    span.innerText = `${usuario} ${tempo}`

    let p    = document.createElement("p")
    p.innerText = texto

    
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)

    
    feed.appendChild(li)
}



// Passos
// P1: pegar valor da textarea
// P2: construir o tweet
// P3: imprimir esse tweet


const tweetar = document.querySelector('button')
tweetar.addEventListener('click',pegarTweet)
const textarea = document.querySelector('textarea')
const feed = document.querySelector(".conteudoPrincipal__listaPosts")



