function Vehicle(x, y) {
    this.pos = new p5.Vector(random(width), random(height))
    // this.pos = createVector(x, y)
    this.vel = p5.Vector.random2D()
    this.acc = new p5.Vector()
    this.r = 8
    this.target = new p5.Vector(x, y)
    this.maxspeed = 15
    this.maxforce = 1
}

Vehicle.prototype.behaviors = function () {
    // let seek = this.seek(this.target)
    // this.applyForce(seek)

    let arrive = this.arrive(this.target)
    this.applyForce(arrive)

    let mouse = new p5.Vector(mouseX, mouseY)
    let flee = this.flee(mouse).mult(2)

    let distance = p5.Vector.sub(this.pos, mouse).mag()
    if (distance < 50) {
        this.applyForce(flee)
    }
}

Vehicle.prototype.seek = function (target) {
    // this gives you a vector pointing from us to the target
    let desired = p5.Vector.sub(target, this.pos)
    desired.setMag(this.maxspeed)

    // steering = desired - current
    let steer = p5.Vector.sub(desired, this.vel)
    return steer.limit(this.maxforce)
}

Vehicle.prototype.flee = function (target) {
    return this.seek(target).mult(-1)
    // watch out! technically, we should probably multiply our
    // desired velocity by -1 first before limiting
}

// like seek, but we slow down as we approach our target :3
Vehicle.prototype.arrive = function (target) {
    // this gives you a vector pointing from us to the target
    let desired = p5.Vector.sub(target, this.pos)

    // the distance between two points is the magnitude of the
    // vector from one to the other
    let distance = desired.mag()

    let speed = this.maxspeed
    if (distance < 100) {
        speed = map(distance, 0, 100, 0, this.maxspeed)
    }

    desired.setMag(speed)

    // steering = desired - current
    let steer = p5.Vector.sub(desired, this.vel)
    return steer.limit(this.maxforce)
}

Vehicle.prototype.applyForce = function (f) {
    // F=ma, but we assume m=1, so F=a
    this.acc.add(f)
}

Vehicle.prototype.update = function () {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
}

Vehicle.prototype.show = function () {
    stroke(0, 0, 100, 100)
    strokeWeight(4)
    point(this.pos.x, this.pos.y)
}