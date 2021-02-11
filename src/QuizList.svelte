<script>
import Quiz from "./Quiz.svelte";
export let quizzes = [];

function AddNewQuiz(title, questions){
    quizzes = [...quizzes, {title, questions}];
}

function handleAddClick(){
    AddNewQuiz("New Quiz", [{question:"What is your favorite color?"}])
}
</script>

<ul>
    {#each quizzes as quiz}
        <Quiz {quiz}/>
    {/each}
</ul>