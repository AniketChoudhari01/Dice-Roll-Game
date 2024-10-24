//add functionality to add player names
// no of matches and display final result
// alert("working");
var randNum1=Math.floor(Math.random()*6)+1;//0-5 then +1
var randNum2=Math.floor(Math.random()*6)+1;//0-5 then +1
var display;
if(randNum1>randNum2){
    display="🚩Player 1 wins!";
}else if(randNum1<randNum2){
    display="Player 2 wins!🚩";
}else{
    display="draws!";
}
document.querySelector("h1").textContent=display;
document.querySelectorAll("img")[0].setAttribute("src","Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice"+randNum1+".png");
document.querySelectorAll("img")[1].setAttribute("src","Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice"+randNum2+".png");

