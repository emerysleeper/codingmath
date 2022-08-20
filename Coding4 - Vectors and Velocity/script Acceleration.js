// let v1 = vector.create(10, 5)
// let v2 = vector.create(3, 4)
// let v3 = v1.add(v2)

window.onload = function() {
    let canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    p = particle.create(100, height, 0, -Math.PI/ 2)
    accel = vector.create(0.01, -0.01)
    // particles = []
    // numParticles = 100

    // for (var i = 0; i < numParticles; i+=1) {
    //     particles.push(particle.create(width/2, height/2, Math.random() + 1, Math.random() * Math.PI * 2))
    // }


    update()

    function update() {
        context.clearRect(0, 0, width, height)

        // for (var i = 0; i < numParticles; i+=1) {
        //     let p = particles[i]
        //     p.update()

        //     context.beginPath()
        //     context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 6, false)
        //     context.fill()
        // }

        p.accelerate(accel)

        p.update()

        context.beginPath()
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 6, false)
        context.fill()



        requestAnimationFrame(update)
    }
}
