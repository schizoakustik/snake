// tests go here; this will not be compiled when this package is used as an extension.

basic.forever(function () {
        read_x()
        read_y()
        pins.analogWritePin(AnalogPin.P1, 573)
        while (input.buttonIsPressed(Button.A)) { pins.analogWritePin(AnalogPin.P1, 1023)}
        while (input.buttonIsPressed(Button.B)) { pins.analogWritePin(AnalogPin.P1, 173)}
})