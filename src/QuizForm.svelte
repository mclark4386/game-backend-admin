<script>
import { createEventDispatcher } from "svelte";
let title = "";
let questions = [{id: "Q1", text: "",answers: [""], correct_answer:0}];

const dispatch = createEventDispatcher();

function handleAddClick() {
    dispatch("add",{title, questions});
    console.log("sending quiz with title:", title, " with questions:",questions);
}

function addRow() {
    questions = [...questions, {id: "Q"+(questions.length+1), text: "",answers: [""], correct_answer:0}];
}

</script>

<div style="outline:solid;">
    <input placeholder="Title" bind:value={title}/><br/>
    <ul>
        {#each questions as question,i (question.id)}
            <li>
                <input placeholder="ID" bind:value={question.id}/>
                <input placeholder="Question" bind:value={question.text}/>
                <br/>
                <ul>
                {#each question.answers as answer, j (j)}
                    <li>
                    {#if j == question.correct_answer}(Answer){/if}
                    <input placeholder={"Answer"+j} bind:value={answer}/>
                    <button on:click={()=>question.correct_answer = j}>Set this as correct answer.</button>
                    </li>
                {/each}
                </ul>
                <button on:click={()=>question.answers = [...question.answers,""]}>Add Answer</button>
            </li>
        {/each}
    </ul>
    <button on:click={addRow}>Add Question</button>
    <br/>
    <button on:click={handleAddClick}>Add New Quiz</button>
</div>