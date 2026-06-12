let score = 0

let currentLevel="B1"

function updateScore(){

document.querySelector("p").innerText=
"Pontszám: "+score

}

function showWord(level){

currentLevel=level

document.getElementById(
"word"
)

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

words[currentLevel][0].eng
){

score++

updateScore()

alert("Helyes valasz!")

}
  
else{

alert("Nem jo valasz")

}

}
