<script>
export let quiz = {title:"",questions:[]};
$: title = quiz[title] !== undefined ? quiz[title]:"<Untitled>";
$: questions = quiz[questions] !== undefined ? quiz[questions]:[];
</script>

<div>
    <h1>Title:{title}</h1>
    
</div>