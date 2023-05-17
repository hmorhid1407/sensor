/**
 * Hector Moreno Hidalgo
 * 
 * S2A
 */
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . #
    . # # # .
    # # # # #
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . # . .
    # # # # #
    # # # # #
    `)
music.playMelody("C D E C D E G A ", 600)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) < 300) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        led.plot(2, 2)
    } else {
        basic.clearScreen()
    }
})
