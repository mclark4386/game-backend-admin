<script>
import Quiz from "./Quiz.svelte";
export let quizzes = [];

let title = "";
let questions = [];

function AddNewQuiz(){
    quizzes = [...quizzes, {title, questions}];
}

function handleAddClick(){
    AddNewQuiz("New Quiz", [{question:"What is your favorite color?"}])
}
</script>

<div style="outline:solid;">
    <input placeholder="Title" bind:value={title}/>

    <button on:click={()=>AddNewQuiz(title,questions)}>Add New Quiz</button>
</div>

<ul>
    {#each quizzes as quiz}
        {@debug quiz}
        <Quiz {quiz}/>
    {/each}
</ul>