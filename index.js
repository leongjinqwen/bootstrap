
function randomColor (){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return 'rgb(' + r + ',' + g +',' + b + ')'
}

function randomX (){
    const left = Math.floor(Math.random()*80);
    return left+'vw'
}

function randomSpeed (){
    const speed = Math.floor(Math.random()*7);
    if (speed<4){
        return 3000
    }
    return Number(speed+'000')
}

function start() {
    let seconds = 30
    show(seconds+2)
    show(seconds+1)
    document.getElementById("countdown").textContent = seconds;
    $("#start").remove()
    let countdown = setInterval(function() {
        show(seconds)
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        let selected = seconds+6
        $(`.balloon-${selected}`).remove()
        if (seconds <= 0) {
            clearInterval(countdown);
            $("#board").append(`<div id="restart" class="button" onClick="restart()">Play again</div>`)
        }
    }, 1000);
};

function restart(){
    $(".container").html("")
    document.getElementById("score").textContent = 0;
    $("#restart").remove()
    start()
    console.log('restart')
};

function show(i){
    if (i>3){
        $(".container").append(`<div class="balloon balloon-${i}" onClick="hide(${i})" >
                        <div class="balloon-ref"></div>
                        <span class="top-c"></span>
                        <span class="left-c"></span>
                    </div>`)
        $(`.balloon-${i}`).css({'background-color':randomColor(),'left':randomX()})
        $(`.balloon-${i}`).animate({bottom:'100vh'},randomSpeed())
    }
}

function hide(i) {
    $(`.balloon-${i}`).remove()
    let score = document.getElementById("score").textContent
    score++
    document.getElementById("score").textContent = score;
};