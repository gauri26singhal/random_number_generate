let randomnumber=parseInt((Math.random() *100 +1));
const submit=document.querySelector("#subt")
const userinput=document.querySelector("#guessfield")
const guessslot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const low0rHi=document.querySelector(".low0rHi")
const statover=document.querySelector(".resultParas")

const p=document.createElement("p")

let prevguess=[]
let numguess=1
let playgame=true
if(playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
       const guess= parseInt(userinput.value)
       validateguess(guess)
    })
}
function validateguess(guess){
    //ye check karega whter value is between 1-100 or not 
    if(isNaN(guess)){
        alert("Please enter a valid number ")
    }else if(guess<1){
        alert("Please enter a  number  more than one")
    }else if(guess>100){
        alert("Please enter number less than 100 ")
    }else{
        prevguess.push(guess)
        if(numguess===11){
            diplayguess(guess)
            diplaymsg(`Game over.Random number was ${randomnumber} `)
            endgame()
        }else{
            diplayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    // check karega ki khti value random number equal toh nhi
    // if yes then display the mesg
    if(guess===randomnumber){
        diplaymsg(`you guessed it right`)
        endgame()
    }else if(guess<randomnumber){
        diplaymsg(`Number is tooo low`)
    }
    else {
        diplaymsg(`Number is tooo High`)
    }
}

function diplaymsg(messgae){
    //they will display the msg
    low0rHi.innerHTML=`<h2>${messgae}</h2>`
}

function diplayguess(guess){
//value clean , array udate ,guess update
userinput.value=''
guessslot.innerHTML += `${guess}   `
numguess++ 
remaining.innerHTML=`${11-numguess}`
}

function endgame(){
    userinput.value=""
    userinput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML=`<h2 id="newgame">Start New</h2>`
    statover.appendChild(p)
    newgame()
}
function newgame(){
const newgamebutton=document.querySelector("#newgame")
newgamebutton.addEventListener("click",function(e){
    randomnumber=parseInt((Math.random() *100 +1));
prevguess=[]
numguess=1
guessslot.innerHTML=''
remaining.innerHTML=`${11-numguess}`
userinput.removeAttribute("disabled")
statover.removeChild(p)
playgame=true

})
}
