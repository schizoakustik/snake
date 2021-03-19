let snake = game.createSprite(2, 2)
let tail: game.LedSprite[] = []
let food = game.createSprite(1, 3)

tail.forEach(function(led: game.LedSprite, index: number) {
    
})

function read_x() {
    if (microboy.readJoystick(Axis.X) < 350) {
        if (snake.get(LedSpriteProperty.X) == 4) { game.gameOver() }
        else { snake.changeXBy(1) }
    }
    else if (microboy.readJoystick(Axis.X) > 750) {
        if (snake.get(LedSpriteProperty.X) == 0) { game.gameOver() }
        snake.changeXBy(-1)
    }
}

function read_y() {
    if (microboy.readJoystick(Axis.Y) < 350) {
        if (snake.get(LedSpriteProperty.Y) == 4) { game.gameOver() }
        else { snake.changeYBy(1) }
    }
    else if (microboy.readJoystick(Axis.Y) > 750) {
        if (snake.get(LedSpriteProperty.Y) == 0) { game.gameOver() }
        snake.changeYBy(-1)
    }
}

function addTail() {
    let x = snake.x()
    let y = snake.y()
    switch (snake.direction()) {
        case -90: {
            x += 1
        }
        case 90: {
            x += -1
        }
        case 0: {
            y += 1
        }
        case 180: {
            y += -1
        }
    }
    return game.createSprite(x, y)
}

function checkFood() {
    if (snake.isTouching(food)) {
        let t: game.LedSprite = addTail()
        tail.push(t)
        food.off()
        food.setX(randint(0, 4))
        food.setY(randint(0, 4))
        food.on()
    }
}