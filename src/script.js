let score = 0

let currentIndex=0

let currentLevel="B1"

function updateScore(){

document.querySelector("p").innerText=
"Pontszám: "+score

}

function showWord(level){

currentIndex=0

currentLevel=level

document.getElementById(
"level"
)

.innerText=

"Szint: "+level

document.getElementById(
"word"
)

.innerText=

words[level][currentIndex].hun

}

updateScore()

document.getElementById(
"answer"
).value=""

let answer=

document.getElementById(
"answer"
)

.value

.toLowerCase()

if(
answer===

words[currentLevel][currentIndex].eng
){

score++

updateScore()

alert("Helyes valasz!")

currentIndex++

if(
currentIndex<
words[currentLevel].length
){

showWord(
currentLevel
)

}

}
  
else{

alert("Nem jo valasz")

}

}
