const correctAnswer = ["A","C","C","D","A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const tryAgain = document.getElementById('try-again');
const questions = document.querySelectorAll(".question")

function resetQuiz(){
    const radioInputs = form.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input =>{
        input.checked = false;
    });
    questions.forEach(question => {
        question.classList.remove("correct", "wrong");
    });

    result.classList.add('hide');
}

tryAgain.addEventListener('click',(event) =>{
    event.preventDefault();
    resetQuiz();
});

form.addEventListener("submit",(event) => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    const answers = [];
    const selectedAnswers = form.querySelectorAll('input[type="radio"]:checked');

    selectedAnswers.forEach(input =>{
        answers.push(input.value);
    });

    if (answers.length !== 5) {
        // Display a message or handle the scenario where all questions aren't answered
        // For this example, let's alert the user and prevent further processing
        alert("Please answer all questions before submitting.");
        return;
    }

    userAnswers.forEach((answer,index) =>{
        if(answer === correctAnswer[index]){
            questions[index].classList.add("correct")
            score = score + 1;
        }else{
            questions[index].classList.add("wrong")
        }
    });
    console.log(score);
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `Your score is ${score}/5!`;

});