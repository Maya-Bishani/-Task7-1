//Question 1//
let num1 = prompt("1-1 please Enter First Number");
let num2 = prompt("1-2 please Enter Second Number");
let num3 = prompt("1-3 please Enter Third Number");

let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);

console.log("Question 1");
console.log("input: " + num1+ " "  +num2 + " "+ num3);
console.log("Max value : " + max);
console.log("Min value : " + min);
console.log("_________________________________")
//Question 2//
console.log("Question 2");
let char = prompt("2-please enter char");
if (char == "a" || char == "o" || char=="e " || char=="I" || char=="u"){
    console.log(  char + " is vowel");
}
else{
    console.log(char  +" is Consonant");
}
console.log("_________________________________")
//Question 3//
console.log("Question 3");
let number = prompt("3-Please Enter Number" );
number = parseInt(number)
for (let i= 1 ; i<=12 ; i++){
    console.log(number * i );
}
console.log("_________________________________")
//Question 4//
console.log("Question 4")
let Number = prompt("4-Please Enter Number")
for (let i = 1; i<= Number ; i++){
    if (i % 2 ==0){
        console.log(i)
    }
}
console.log("_________________________________")
//Question 5//
console.log("Question 5")
let mark1 = prompt("5-1 please enter first Mark");
let mark2 = prompt("5-2 please enter second Mark");
let mark3 = prompt("5-3 please enter third Mark");
let mark4 = prompt("5-4 please enter third Mark");
let mark5 = prompt("5-5 please enter third Mark");
mark1 = parseInt(mark1)
mark2 = parseInt(mark2)
mark3 = parseInt(mark3)
mark4 = parseInt(mark4)
mark5 = parseInt(mark5)
let total = mark1 + mark2 + mark3 + mark4 + mark5
console.log( "Total = " + total)
let average = total / 5 
console.log("Average = " +average)
let percentage = (total / 5) 
console.log("percentage =" +  percentage+" %")
console.log("_________________________________")
//Question 6//
let markphysics = prompt("6-1 Please Enter Physics Mark")
let markChemistry = prompt("6-2 Please Enter Chemistry Mark")
let markBiology  = prompt("6-3 Please Enter Biology Mark")
let markMath  = prompt("6-4 Please Enter Math Mark")
let markcomputer  = prompt("6-5 Please Enter Computer Mark")
markphysics = parseInt(markphysics)
markChemistry =parseInt(markChemistry)
markBiology = parseInt(markBiology)
markMath = parseInt(markMath)
markcomputer = parseInt(markcomputer)
let sum = markphysics + markChemistry + markBiology +markMath + markcomputer
let percentage2 = (sum / 5)  
if (percentage2 >= 90 ) {
     console.log ( "percentage : " + percentage2 +"%" + ":" + "Grad A");
}
  else if (percentage2 >= 80) {
    console.log ( "percentage : " + percentage2 +" %" + " : Grad B")

  }


else if (percentage2 >= 70){
    console.log ("percentage : " + percentage2  +" %"+ " : Grad C");
}


else if (percentage2 >= 60){
    console.log ( "percentage : " + percentage2 +" %"  + " : Grad D")

}
    

 else if (percentage2 >= 40){
    console.log ( "percentage : " + percentage2  +" %" +" : Grad E")

 }
   

else if  (percentage2 < 40){
    console.log ("percentage : " + percentage2 +" %" + " Grad F")
    
}
//end part1 
//start part2
document.getElementById("img1").addEventListener("click" , function(){
    var cont= document.getElementById("container1")
    if (container1.style.backgroundColor === "brown" || container1.style.backgroundColor === "yellow" ||  container1.style.backgroundColor === "pink" ||  container1.style.backgroundColor === "green"){
        container1.style.backgroundColor = "blue";
    }
    else {
        container1.style.backgroundColor ="brown";
    }
});
document.getElementById("img2").addEventListener("click" , function(){
    var cont= document.getElementById("container1")
    if (container1.style.backgroundColor === "brown" || container1.style.backgroundColor === "blue" ||  container1.style.backgroundColor === "yellow" ||  container1.style.backgroundColor === "pink"){
        container1.style.backgroundColor = "green";
    }
    else {
        container1.style.backgroundColor ="brown";
    }
});
document.getElementById("img3").addEventListener("click" , function(){
    var cont= document.getElementById("container1")
    if (container1.style.backgroundColor === "brown" || container1.style.backgroundColor === "blue"  || container1.style.backgroundColor === "green" ||  container1.style.backgroundColor === "pink"){
        container1.style.backgroundColor = "yellow";
    }
    else {
        container1.style.backgroundColor ="brown";
    }
});
document.getElementById("img4").addEventListener("click" , function(){
    var cont= document.getElementById("container1")
    if (container1.style.backgroundColor === "brown" || container1.style.backgroundColor === "blue"  || container1.style.backgroundColor === "green" || container1.style.backgroundColor === "yellow"  ){
        container1.style.backgroundColor = "pink";
    }
    else {
        container1.style.backgroundColor ="brown";
    }
});


function darkmood(element){
    
    // Access To Div
    var x = document.getElementById("co2")

    // We Have To Access These Elements
    let title = document.getElementById('title')
    let description = document.getElementById('desc')

    // If Dark Mood
    if (x.style.backgroundColor === 'rgb(0, 0, 0)'){
        x.style.backgroundColor = "rgb(255, 255, 255)" 
        title.style.color = 'rgb(0, 0, 0)'
        description.style.color = 'rgb(0, 0, 0)'
        element.classList.remove('fa-sun')
        element.classList.add('fa-moon')
        element.style.color= 'rgb(0, 0, 0)'
    }
    // If Light Mood 
    else {
        x.style.backgroundColor = "rgb(0, 0, 0)" 
        title.style.color = 'rgb(255, 255, 255)'
        description.style.color = 'rgb(255, 255, 255)'
        element.classList.remove('fa-moon')
        element.classList.add('fa-sun')
        element.style.color= 'rgb(255, 255, 255)'
    }
}

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionanswer = header.nextElementSibling;
        header.classList.toggle('active');
        if (header.classList.contains('active')) {
            accordionanswer.style.display = 'block';
        } else {
            accordionanswer.style.display = 'none';
        }
    });
});

//stars section 4
const stars = document.querySelectorAll(".stars i");
stars.forEach((star , index1)=>{
    star.addEventListener("click" , () => {
       
        stars.forEach((star , index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
} );

function highlightStars(index) {
    const stars = document.querySelectorAll('.star');
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('active');
    }
    
    for (let i = index +1 ; i < stars.length; i++) {
      stars[i].classList.remove('active');
    }
  }
  






    

    
    







  