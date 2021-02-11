<script>
import Quiz from "./Quiz.svelte";
export let quizzes = [];

let title = "";
let questions = [];

function AddNewQuiz(newTitle, newQuestions){
    quizzes = [...quizzes, {title: newTitle, questions: newQuestions}];
}

function handleAddClick(){
    console.log("would be using title:", title);
    AddNewQuiz("New Quiz", [{question:"What is your favorite color?"}]);
}
</script>

<div style="outline:solid;">
    <input placeholder="Title" bind:value={title}/>

    <button on:click={handleAddClick}>Add New Quiz</button>
</div>

<ul>
    {#each quizzes as quiz}
        {@debug quiz}
        {console.log(quiz)}
        <Quiz {quiz}/>
    {/each}
</ul>