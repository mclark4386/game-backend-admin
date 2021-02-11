<script>
let m;
function handleMousemove(e){
    m = e
}
</script>

<div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
</div>