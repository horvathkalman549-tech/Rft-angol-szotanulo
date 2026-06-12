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

let answer=

document.getElementById(
"answer"
)

.value

.toLowerCase()

if(
answer===

words["B1"][0].eng
){

score++

updateScore()

}

}
