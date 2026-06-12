let score = 0

function updateScore(){

document.querySelector("p").innerText=
"Pontszám: "+score

}

function showWord(level){

document.getElementById("word")
.innerText=

words[level][0].hun

}

updateScore()
