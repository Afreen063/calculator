let input =document.getElementsByClassName("input");
let op=document.getElementsByClassName("op");
let num=document.getElementsById("num");
let number=[];
let count=0;
num.eventlistener('click',function(){
    number[count++]=num.innerText();
})
op.eventlistener('click',function()
{
   input=number[1]    
})