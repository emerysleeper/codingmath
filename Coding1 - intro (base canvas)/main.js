window.onload = function() {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight

    // context.fillRect(0, 0, width, height)

    for(let i = 0; i < 100; i += 1) {
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke()
    }



}
