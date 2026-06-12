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

let levelName=

level==="B1"

?

"Kezdő"

:

level==="B2"

?

"Középhaladó"

:

"Haladó"

document.getElementById(
"level"
)

.innerText=

"Szint: "+

levelName

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
.toLowerCase()

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

currentIndex++

document.getElementById(
"answer"
)

.value=""

document.getElementById(
"remaining"
)

.innerText=

"Hatralevo szavak: "+

(

words[currentLevel]
.length

-

currentIndex

)

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

"Vege!"

let percent=

Math.round(

score

/

words[currentLevel]
.length

*100

)

document.getElementById(
"message"
)

.innerText=

"Pontszám: "+

score+

"/"+

words[currentLevel]
.length+

" ("+

percent+

"%)"

}

}

}

updateScore()
