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

words[level][currentIndex].hun

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

function finishGame(text,word){

document.getElementById(
"word"
)

.innerText=

word

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

updateScore()

}

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

document.getElementById(
"message"
)

.innerText=

answer===

words[currentLevel]
[currentIndex-1]
.eng
.toLowerCase()

?

"Helyes válasz!"

:

"Nem jó válasz"

}

else{

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

finishGame(

text,

"Gratulálok, vége!"

)

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
