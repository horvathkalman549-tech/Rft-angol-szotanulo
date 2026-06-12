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

words[level].sort(

()=>

Math.random()-0.5

)

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
"Hátralévő szavak: " +
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

"Helyes válasz!"

currentIndex++

document.getElementById(
"remaining"
)

.innerText =

"Hátralévő szavak: "+

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

"Gratulálok, vége!"

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

else{

document.getElementById(
"message"
)

.innerText=

"Nem jó válasz"

currentIndex++

document.getElementById(
"answer"
)

.value=""

document.getElementById(
"remaining"
)

.innerText=

"Hátralévő szavak: "+

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

"Vége!"

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
