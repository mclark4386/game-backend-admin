<script>
import Question from "./Question.svelte";
export let quiz = {title:"",questions:[]};
$: console.log(quiz);
$: title = quiz.title ||"<Untitled>";
$: questions = quiz.questions || [];
</script>

<div>
    <h1>Title:{title}</h1>
    <ul>
        {#each questions as question}
            <li><Question {...question}/> </li>
        {/each}
    </ul>
</div>