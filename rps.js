var playlerscore=0;
var computerscore=0;
const compi = document.getElementById("comcimg");
compi.innerHTML=computerscore;
const plai = document.getElementById("usecimg");
plai.innerHTML=playlerscore;

function com(){
var x=Math.floor(Math.random()*3);
// console.log(x);
if(x==0){
    var compch="rock";
    console.log(compch);
}
else if(x==1){
    var compch="paper";
    console.log(compch);
}
else{
    var compch="scissors";
    console.log(compch);
}

if(compch=="rock"){
    document.getElementById("comcimg").src = "rock2.png";
}
else if(compch=="paper"){
    document.getElementById("comcimg").src = "paper.png";
}
else{
    document.getElementById("comcimg").src = "scissors2.png";
}

if(document.querySelector('.anm').classList != "anmt"){
    document.getElementById("comcimg").classList.add("anmt");
    document.getElementById("usecimg").classList.add("anmt");
    setTimeout(function(){
        document.getElementById("comcimg").classList.remove("anmt");
        document.getElementById("usecimg").classList.remove("anmt");
    },300);
}

if (playerch=="rock"&&compch=="paper"){
    str="computer wins";
    computerscore++;
}
else if (playerch=="paper"&&compch=="scissors"){
    str="computer wins";
    computerscore++;
}
else if (playerch=="scissors"&&compch=="rock"){
    str="computer wins";
    computerscore++;
}
else if (playerch==compch){
    str="tie";
}
else{
    str="you win";
    playlerscore++;
}
document.getElementById("result").innerHTML=str;
// document.getElementById("scorey").innerHTML(computerscore);
// document.getElementById("scorec").innerHTML(playlerscore);
st = "your score is : "+playlerscore+" / Computer Score is : "+computerscore;
document.getElementById("your").innerHTML = st;
}


var playerch = document.getElementById("rock").addEventListener("click",rok);
var playerch = document.getElementById("paper").addEventListener("click",peper);
var playerch = document.getElementById("scissors").addEventListener("click",scisso);
document.getElementById("res").addEventListener("click",rese);
// document.getElementById("no").addEventListener("click",click);


function rok(){
    playerch="rock";
    console.log(playerch);
    document.getElementById("usecimg").src = "rock2.png";
    com();
}
function peper(){
    playerch="paper";
    console.log(playerch);
    document.getElementById("usecimg").src = "paper.png";
    com();
}
function scisso(){
    playerch="scissors";
    console.log(playerch);
    document.getElementById("usecimg").src = "scissors2.png";
    com();
}

function rese(){
    computerscore=0;
    playlerscore=0;
    st = "your score is : "+playlerscore+" / Computer Score is : "+computerscore;
    document.getElementById("result").innerHTML="select your choice to start the game";
    document.getElementById("comcimg").src = "cross.png";
    document.getElementById("usecimg").src = "cross.png";
    document.getElementById("your").innerHTML = st;
}
