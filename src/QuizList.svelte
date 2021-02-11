<script>
export let quizzes = [];

function AddNewQuiz(title, questions){
    quizzes = [...quizzes, {title, questions}];
}

function handleAddClick(){
    AddNewQuiz("New Quiz", [{question:"What is your favorite color?"}])
}
</script>

