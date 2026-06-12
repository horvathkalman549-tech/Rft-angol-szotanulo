let score = 0

let currentIndex = 0

let currentLevel = "B1"

function updateScore(){

document.querySelector("p").innerText =
"Pontszám: " + score

}

function showWord(level){

score=0

updateScore()

currentIndex = 0

currentLevel = level

words[level].sort(
()=>Math.random()-0.5
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

"Szint: "+levelName

document.getElementById(
"remaining"
)

.innerText=

"Hátralévő szavak: "+

words[level].length

document.getElementById(
"word"
)

.innerText=

words[level][0].hun

document.getElementById(
"answer"
)

.value=""

document.getElementById(
"restart"
)

.style.display=

"none"

}

function finishGame(){

let percent=

Math.round(

score

/

words[currentLevel]
.length

*100

)

let text=

"Pontszám: "+

score+

"/"+

words[currentLevel]
.length+

" ("+

percent+

"%)"

if(percent>=80){

text+=

" - Nagyon ügyes! 🎉"

}

else if(percent>=60){

text+=

" - Szép munka! 😊"

}

else{

text+=

" - Gyakorolj még egy kicsit 🙂"

}

document.getElementById(
"word"
)

.innerText=

"Vége!"

document.getElementById(
"message"
)

.innerText=

text

document.getElementById(
"restart"
)

.style.display=

"inline-block"

}

function checkAnswer(){

if(
currentIndex>=
words[currentLevel]
.length
){

return

}

let answer=

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

document.getElementById(
"message"
)

.innerText=

"Helyes válasz!"

}

else{

document.getElementById(
"message"
)

.innerText=

"Nem jó válasz"

}

updateScore()

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

*

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

finishGame()

}

}

updateScore()

function restartGame(){

score=0

currentIndex=0

currentLevel="B1"

updateScore()

document.getElementById(
"level"
)

.innerText=

"Szint: nincs kiválasztva"

document.getElementById(
"remaining"
)

.innerText=

"Hátralévő szavak: 0"

document.getElementById(
"word"
)

.innerText=

"Válassz szintet"

document.getElementById(
"message"
)

.innerText=""

document.getElementById(
"answer"
)

.value=""

document.getElementById(
"restart"
)

.style.display=

"none"

}
