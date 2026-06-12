let score = 0

let currentIndex = 0

let currentLevel = "B1"

function updateScore(){

document.querySelector("p").innerText =
"Pontszám: " + score

}

function showWord(level){

currentIndex = 0

currentLevel = level

document.getElementById(
"message"
).innerText = ""

document.getElementById(
"level"
).innerText =
"Szint: " + level

document.getElementById(
"remaining"
).innerText =
"Hatralevo szavak: " +
words[level].length

document.getElementById(
"word"
).innerText =
words[level][currentIndex].hun

document.getElementById(
"answer"
).value=""

}

function checkAnswer(){

let answer =

document.getElementById(
"answer"
)

.value

.toLowerCase()

if(

answer===

words[currentLevel]
[currentIndex]
.eng

){

score++

updateScore()

document.getElementById(
"message"
)

.innerText =

"Helyes valasz!"

currentIndex++

document.getElementById(
"remaining"
)

.innerText =

"Hatralevo szavak: "+

(

words[currentLevel]
.length

-

currentIndex

)

document.getElementById(
"answer"
)

.value=""

if(

currentIndex<

words[currentLevel]
.length

){

document.getElementById(
"word"
)

.innerText=

words[currentLevel]
[currentIndex]
.hun

}

else{

document.getElementById(
"word"
)

.innerText=

"Gratulalok, vege!"

}

}

else{

document.getElementById(
"message"
)

.innerText=

"Nem jo valasz"

}

}

updateScore()
