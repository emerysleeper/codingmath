let utils = {
    norm: function(value, min, max) {
        return (value-min) / (max-min)
    },

    lerp: function(norm, min, max) {
        return (max-min) * norm + min
    },

    map: function(value, sourceMin, sourceMax, destMin, destMax) {
        return lerp(norm(value, sourceMin, sourceMax), destMin, destMax)
    },

    clamp: function(value, min, max) {
        return Math.min(Math.max(value, min), max)
    },

    distance: function(p0, p1) {
        let dx = p1.x - p0.x,
            dy = p1.y - p0.y
        return Math.sqrt(dx*dx + dy*dy)
    },

    distanceXY: function(x0, y0, x1, y1) {
        let dx = x1 - x0,
            dy = y1 - y0
        return Math.sqrt(dx*dx + dy*dy)
    },

    circleCollision: function(c0, c1) {
        return utils.distance(c0, c1) <= c0.radius + c1.radius
    }
}
