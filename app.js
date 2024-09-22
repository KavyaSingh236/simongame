let gameseq=[];
let userseq=[];
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let highestScore = document.querySelector(".hs");
document.addEventListener("keypress",function(){
    if(started == false){
        started = true;


        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },185);
}

function levelUp(){
    userseq=[];
    level ++;
    h3.innerText =`Level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let ranColor =  btns[randomIdx] ;
    let randBtn = document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor);
    btnFlash(randBtn);
}
function checkAns(indx){
 if(userseq[indx]==gameseq[indx]){
    if(userseq.length == gameseq.length){
       setTimeout(levelUp,1000);
    }
 }
 else{
    h3.innerHTML = `Game Over!Your score was <b>${level}</b> <br>Press any key to start again`;

    reset();
 }
}

function btnPress() {
  let btn = this;
  btnFlash(this);
  userColor = btn.getAttribute("id");
  userseq.push(userColor);
  checkAns(userseq.length-1);

}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}
