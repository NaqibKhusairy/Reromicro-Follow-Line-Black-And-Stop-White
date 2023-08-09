basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        reromicro.MoveForward(47)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 32)
        reromicro.RunMotor(Motors.Right, 47)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Left, 47)
        reromicro.RunMotor(Motors.Right, 32)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(47)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 0)
        reromicro.RunMotor(Motors.Right, 47)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Right, 0)
        reromicro.RunMotor(Motors.Left, 47)
    } else {
        reromicro.Brake()
        music.playTone(988, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . # # # .
                # # . . #
                # . # . #
                # . . # #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
