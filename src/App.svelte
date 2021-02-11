<script>
  import { onMount } from "svelte";
  import QuizList from "./QuizList.svelte";

  let datePromise;
  let errorPromise;

  let loggedIn = false;

  let quizzes = [];

  onMount(async () => {
    refresh();
  });

  let version = 0;
  $: labeledVersion = "Version:"+version;

  $: if(version >= 10){
    alert("Welcome to a new world!");
  }

  function handleClick(){
    version += 1;
  }
  async function refreshDate() {
    const res = await fetch("/api/date");
    const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
  }
  async function refreshError() {
    const res = await fetch("/api/error");
    const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
  }
  function refresh(){
    datePromise = refreshDate();
    errorPromise = refreshError();
  }
</script>

{#if !loggedIn}
  <input placeholder="Email"/> <br/>
  <input placeholder="Password" type="password"/> <br/>
  <button on:click={()=>loggedIn = !loggedIn}>Login</button>
{:else}
<main>
  <h1>Svelte + Node.js API</h1>
  <h2>
    Deployed with
    <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
      Vercel
    </a>
    !
  </h2>
  <p>
    <a
      href="https://github.com/vercel/vercel/tree/master/examples/svelte"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    function. See
    <a href="/api/date">
      <code>api/date</code>
      for the Date API with Node.js
    </a>
    .
  </p>
  <br />
  <h2 on:click={refresh}>The date according to Node.js is:</h2>
  {#await datePromise}
    <p>...loading date</p>
  {:then date}
    <p>{date ? date : 'Loading date...'}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
<br/>
Error:
  {#await errorPromise}
    <p>...loading error</p>
  {:then date}
    <p>{date ? date : 'Loading error...'}</p>
  {:catch error}
    <p style="color: red">({error.code}){error.message}</p>
  {/await}

  <p><b><button on:click={handleClick}>{labeledVersion}</button></b>  <i>int({version})</i></p>
  <p>Total Quizzes: {quizzes.length}</p>
  <QuizList {quizzes}/>
</main>

{/if}