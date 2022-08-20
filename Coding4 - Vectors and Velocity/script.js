// let v1 = vector.create(10, 5)
// let v2 = vector.create(3, 4)
// let v3 = v1.add(v2)

window.onload = function() {
    let canvas = document.querySelector('#canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = particle.create(width / 2, height / 2, 3, Math.random() * Math.PI * 2)


    p.radius = 20



    update()

    function update() {
        context.clearRect(0, 0, width, height)

        p.update()


        context.beginPath()
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false)
        context.fill()

        if(p.position.getX() - p.radius > width) {
            p.position.setX( -p.radius)
        }

        if(p.position.getX() +  p.radius< 0) {
            p.position.setX(width  + p.radius)
        }

        if(p.position.getY()  - p.radius > height) {
            p.position.setY(-p.radius)
        }

        if(p.position.getY() + p.radius < 0) {
            p.position.setY(height + p.radius)
        }


        requestAnimationFrame(update)
    }
}
