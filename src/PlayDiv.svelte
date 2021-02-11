<script>
let m = {x:0,y:0};
function handleMousemove(e){
    m.x = e.clientX
    m.y = e.clientY
}
</script>
<article style="outline:solid;">
<div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
</div>
</article>