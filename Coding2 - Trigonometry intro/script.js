window.onload = function() {
    let canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight

    context.translate(0, height/2)

    for(let angle = 0; angle < Math.PI * 2; angle += 0.01) {
        let x = angle*100,
        y = -Math.sin(angle)*200

        context.fillRect(x, y, 2, 2)
    }
}