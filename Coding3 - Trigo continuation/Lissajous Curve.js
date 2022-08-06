window.onload = function() {
    let canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight

    context.translate(width/2, height/2)

    let centerY = height*0.5,
    centerX = width*0.5,
    xSpeed = 0.1
    ySpeed = 0.131
    xAngle = 0
    yAngle = 0

    x = 0
    y = 0
    // angle = 0
    

    render();

    function render() {
        context.clearRect(-width/2, -height/2, width, height)
        x = Math.cos(xAngle)*150
        y = Math.sin(yAngle)*300


        // x = Math.cos(angle)*115

        // context.fillRect(x, y, 4, 4)
        context.beginPath()
        context.arc(x, y, 10, 0, Math.PI*2, false)
        context.fill()

        xAngle += xSpeed
        // if (xAngle >= Math.PI * 2) {
        //     xAngle = 0
        // }
        yAngle += ySpeed
        // if (yAngle >= Math.PI * 2) {
        //     yAngle = 0
        // }

        requestAnimationFrame(render)
    }
}