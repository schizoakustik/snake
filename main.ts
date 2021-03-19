let snake = game.createSprite(2, 2)
let food = game.createSprite(0, 0)
food.off()

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

basic.forever(function () {
        read_x()
        read_y()
})
