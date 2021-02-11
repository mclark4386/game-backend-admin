<script>
    export let text = "<no text set>";
    export let answers = ["<answers not set>"];
    export let correct_answer = 0;
    export let id = "Qx";
</script>

<div>
    <h3>{id}: {text}</h3>
    <ul>
        {#each answers as answer, i}
             <li>
             {#if i == correct_answer}(Answer) {/if}
             {answer}
             </li>
        {/each}
    </ul>
</div>