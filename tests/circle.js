window.onload = function() {
    let canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight

    context.translate(width/2,  height/2)

    let angle = 0,
    center = [0, 0]


    let drawCircle = function() {

        //Redraw the circle and coordinates
        context.clearRect(-canvas.width, -canvas.height, canvas.width*2, canvas.height*2);

        //Draw x axis
        context.beginPath();
        context.moveTo(-canvas.width/4, 0);
        context.lineWidth = 2
        context.lineTo(canvas.width/4, 0);
        context.stroke()

        //Draw y axis
        context.beginPath();
        context.moveTo(0, -canvas.height/4);
        context.lineWidth = 2
        context.lineTo(0, canvas.height/4);
        context.stroke()


        //Draw the circle
        context.beginPath();
        context.arc(0, 0, 100, 0, Math.PI*2)
        context.lineWidth = 2
        context.stroke()

        if (angle >= Math.PI * 2){
            angle = 0
        }
        
        x = Math.cos(angle)*100
        y = -Math.sin(angle)*100

        // console.log(x, y)

        //Create the dot on the circle
        // context.fillRect(x, y, 3, 3)

        //Create the hypothenuse
        context.beginPath();
        context.moveTo(x, y);
        context.lineWidth = 4
        context.lineTo(center[0], center[1]);
        context.stroke()


        //Create the opposite cathet
        context.beginPath();
        context.moveTo(x, y);
        context.lineWidth = 4
        context.lineTo(x, 0);
        context.stroke()


        angle += 0.04
    }

    let circleInterval = setInterval(drawCircle, 20)

    
    // for(let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    //     let x = angle*100,
    //     y = -Math.sin(angle)*200

    //     context.fillRect(x, y, 2, 2)
    // }
}