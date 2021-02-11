<script>
import { createEventDispatcher } from "svelte";
let title = "";
let questions = [{id: "", text: "",answers: [""], correct_answer:0}];

const dispatch = createEventDispatcher();

function handleAddClick() {
    dispatch("add",{title, questions});
    console.log("sending quiz with title:", title, " with questions:",questions);
}

function addRow() {
    questions = [...questions, {id: "", text: "",answers: [""], correct_answer:0}];
}

</script>

<div style="outline:solid;">
    <input placeholder="Title" bind:value={title}/><br/>
    <ul>
        {#each questions as {id,question} (question.id)}
            <li>
                <input placeholder="Question" bind:value={question.text}/><br/>
            </li>
        {/each}
    </ul>
    <button on:click={addRow}>Add Question</button>
    <br/>
    <button on:click={handleAddClick}>Add New Quiz</button>
</div>