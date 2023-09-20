const generatememebtn = document.querySelector(".meme-generator .generate-meme-button");
const memeimage = document.querySelector(".meme-generator img");
const memetitle = document.querySelector(".meme-generator .meme-title");
const memeauthor = document.querySelector(".meme-generator .meme-author");

const updatedetails = (url, title, author) => {
    memeimage.setAttribute("src", url);
    memetitle.innerHTML = title;
    memeauthor.innerHTML = author;
}

const generatememe = () => {
    fetch("https://meme-api.com/gimme/shitposting")
        .then(response => response.json())
        .then(data => {
            updatedetails(data.url, data.title, data.author);
        });
}

generatememebtn.addEventListener("click", generatememe);


//SIM EU QUE FIZ ESSA PORRA, N FOI CTRL C + CTRL V EU SEGUI O TUTORIAL E FIZ ESSE LIXO

//KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK N DA PRA TROCA O BACKGROUND NO STYLE.CSS


