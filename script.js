const countdown =document.getElementById('countDown');
const answer1= document.getElementById('answer1');
const answer2= document.getElementById('answer2');
const answer3= document.getElementById('answer3');
const answer4= document.getElementById('answer4');

init()

function init(){
    answer1.addEventListener('click',answer11);
    answer2.addEventListener('click',answer22);
    answer3.addEventListener('click',answer33);
    answer4.addEventListener('click',answer44);
    rendur();
}


    function answer11(){
        answer1.style.backgroundColor='blue';
        answer1.style.color='white';
     
    }
function answer22(){
    answer2.style.backgroundColor='blue';
    answer2.style.color='white';

}
function answer33(){
    answer3.style.backgroundColor='blue';
    answer3.style.color='white';
}
function answer44(){
    answer4.style.backgroundColor='blue';
    answer4.style.color='white';
}

function rendur(){
    let x=8;
   
   const data= setInterval(()=>{
    x--;
    countdown.innerText=x;
  
    if(x===0){
        clearInterval(data);
        answer2.style.backgroundColor='green';
        answer2.style.color='white';
        answer1.style.backgroundColor='none';
        answer1.style.color='none';
    }
    },1000)
}