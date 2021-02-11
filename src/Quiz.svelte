<script>
export let quiz = {title:"",questions:[]};
$: title = quiz[title] ||"<Untitled>";
$: questions = quiz[questions] || [];
</script>

<div>
    <h1>Title:{title}</h1>
    <ul>
        {#each questions as question}
            <li>{question}</li>
        {/each}
    </ul>
</div>