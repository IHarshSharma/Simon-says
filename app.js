let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let btns=["pink","blue","green","yellow"];

let h3 = document.querySelector('h3');
let hs=0;

let h4= document.querySelector('h4'); 

document.addEventListener("keypress",function () {
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 100);
}

function levelUp(params) {
    userSeq=[];
     level++;
     h4.innerText = `Level ${level}`;

     if(level>hs){
        hs=level;
        h3.innerText = `Highest Score: ${hs}`;
     }

     //random btn choose
      let randIdx = Math.floor(Math.random()*4);
      let randColor = btns[randIdx];
      let randbtn = document.getElementById(`${randColor}`);
      gameSeq.push(randColor);
      console.log(gameSeq);
     btnFlash(randbtn);
}

function checkAns(idx){
   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(() => {
            levelUp();
        }, 1000);
        
    }
   } else {
    h4.innerHTML = `Game Over! Your score was:<b>${level}</b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
   }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
