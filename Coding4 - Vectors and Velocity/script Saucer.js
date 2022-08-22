window.onload = function() {
    let canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        ship = particle.create(width / 2, height/ 2, 0, 0),
        thrust = vector.create(0, 0),
        angle = 0


    update()

    document.body.addEventListener("keydown", function(event) {
        switch(event.keyCode) {
            case 38:
                thrust.setY(-0.1)
                break
            case 40:
                thrust.setY(0.1)
                break

            case 37:
                thrust.setX(-0.1)
                break

            case 39:
                thrust.setX(0.1)
                break

            default:
                break
        }
    })

    document.body.addEventListener("keyup", function(event) {
        switch(event.keyCode) {
            case 38:
                thrust.setY(0)
                break
            case 40:
                thrust.setY(0)
                break

            case 37:
                thrust.setX(0)
                break

            case 39:
                thrust.setX(0)
                break

            default:
                break
        }
    })


    function update() {
        context.clearRect(0, 0, width, height)

        ship.accelerate(thrust)
        ship.update()

        context.save()
        context.translate(ship.position.getX(), ship.position.getY())
        context.rotate(angle)

        context.beginPath()
        context.moveTo(10, 0)
        context.lineTo(-10, -7)
        context.lineTo(-10, 7)
        context.lineTo(10, 0)
        context.stroke()

        context.restore()

        // context.beginPath()
        // context.arc(ship.position.getX(), ship.position.getY(), 10, 0, Math.PI * 6, false)
        // context.fill()

        if(ship.position.getX() > width) {
            ship.position.setX(0)
        }

        if(ship.position.getX() < 0) {
            ship.position.setX(width)
        }

        if(ship.position.getY() > height) {
            ship.position.setY(0)
        }

        if(ship.position.getY() < 0) {
            ship.position.setY(height)
        }

        requestAnimationFrame(update)
    }
}
