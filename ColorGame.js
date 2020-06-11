let colors=generateRandomColors(6);
let body=document.querySelector("body");
let goalColor=pickColor(6);
let squares=document.querySelectorAll(".square");
let display=document.querySelector("#display");
let colorDisplay=document.querySelector("#colorDisplay");
let h1=document.querySelector("h1");
let btnReset=document.querySelector("#reset");
let btnEasy=document.querySelector("#easy");
let btnHard=document.querySelector("#hard");
colorDisplay.textContent=goalColor;
let numSquares=6;


btnEasy.addEventListener("click",function(){
  this.classList.add("selected");
  btnHard.classList.remove("selected");
  numSquares=3;
  colors=generateRandomColors(numSquares);
  goalColor=pickColor(numSquares);
  colorDisplay.textContent=goalColor; 
  h1.style.backgroundColor="steelblue";
  for(var i=0;i<3;i++){
    squares[i].style.backgroundColor=colors[i];
  }
  for(var i=3;i<6;i++){
    squares[i].style.display="none";
  }
});

btnHard.addEventListener("click",function(){
  this.classList.add("selected");
  btnEasy.classList.remove("selected");
  numSquares=6;
  colors=generateRandomColors(numSquares);
  display.textContent="";
  goalColor=pickColor(numSquares);
  colorDisplay.textContent=goalColor;
  h1.style.backgroundColor="steelblue";
  for(let i=0;i<numSquares;i++){
    //add background color to squares
    squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="block";
  }
});
btnReset.addEventListener("click",function(){
  colors=generateRandomColors(numSquares);
  display.textContent="";
  goalColor=pickColor(numSquares);
  colorDisplay.textContent=goalColor;
  for(var i=0;i<numSquares;i++){
    squares[i].style.backgroundColor=colors[i];
  }   
  h1.style.backgroundColor="steelblue";
});
btnReset.addEventListener("click",function(){
  colors=generateRandomColors(numSquares);
  display.textContent="";
  goalColor=pickColor(numSquares);
  colorDisplay.textContent=goalColor;
  for(var i=0;i<numSquares;i++){
    squares[i].style.backgroundColor=colors[i];
  }   
  h1.style.backgroundColor="steelblue";
});
for(let i=0;i<6;i++){
  //add background color to squares
  squares[i].style.backgroundColor=colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click",function(){
    let clickedColor =this.style.backgroundColor;
    if(clickedColor===goalColor){
      display.textContent="Correct!!";
      changeColor(goalColor);
      h1.style.backgroundColor=goalColor;
      btnReset.textContent="Play Again?";
      btnReset.addEventListener("click",function(){
        this.textContent="New Colors";
      });
    }
    else{
      this.style.backgroundColor="#232323";
      display.textContent="wrong!!";
    }
  });
}

function changeColor(color){
  for(i=0;i<6;i++){
    squares[i].style.backgroundColor=color;
  }
}

//now to pick a random color(right answer color) from the colors array
//we will use Math.random() to generate a random number between 0 and 6
function pickColor(arrSize){
  let index=Math.floor(Math.random()*arrSize);
  return colors[index];
} 

function generateRandomColors(size){
  let colorsArray=[];
  for(let i=0;i<size;i++){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    let str="rgb(" + a + ", " + b + ", " + c + ")";
    colorsArray[i]=str;
  }
  return colorsArray;
}


