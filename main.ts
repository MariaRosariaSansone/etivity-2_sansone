let lumin = 0
basic.forever(function () {
    lumin = input.lightLevel()
    led.plotBarGraph(
    0,
    255
    )
    basic.pause(1000)
    basic.clearScreen()
})
