basic.forever(function () {
        read_x()
        read_y()
        checkFood()
        pins.analogWritePin(AnalogPin.P0, 573)
        pins.analogWritePin(AnalogPin.P1, 573)
        while (input.buttonIsPressed(Button.A)) { pins.analogWritePin(AnalogPin.P1, 1023)}
        while (input.buttonIsPressed(Button.B)) { pins.analogWritePin(AnalogPin.P1, 173)}
        snake.move(1)
        if (snake.isTouchingEdge()) {
            snake.turn(Direction.Left, 90)
        }
        console.log(snake.direction())
        basic.pause(250)
})