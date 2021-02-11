<script>
let m = {x:0,y:0};
function handleMousemove(e){
    m.x = e.offsetX
    m.y = e.offsetY
}
</script>

<div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
</div>