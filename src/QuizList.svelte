<script>
import Quiz from "./Quiz.svelte";
import QuizForm from "./QuizForm.svelte";
export let quizzes = [];


function AddNewQuiz(event){
    let newTitle = event.detail.title;
    let newQuestions = event.detail.questions;
    quizzes = [...quizzes, {title: newTitle, questions: newQuestions}];
}
</script>

<QuizForm on:add={AddNewQuiz}/>

<ul>
    {#each quizzes as quiz}
        {@debug quiz}
        {console.log(quiz)}
        <Quiz {quiz}/>
    {/each}
</ul>