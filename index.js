const correctAnswers=["C","D","C","C","A"];
const form=document.querySelector(".quiz-form");
const question=document.querySelectorAll(".question");
console.log(question[0]);
var result=document.querySelector(".result");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const userAnswers=[form.q1.value,
                       form.q2.value,
                       form.q3.value,
                       form.q4.value,
                       form.q5.value];
    console.log(userAnswers);
    let score=0;
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score++;
            question[index].classList.add("correct");
        }
        else{
            question[index].classList.add("wrong");
        }
    });
    
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent=`You Scored ${score}/5 ! `;
});