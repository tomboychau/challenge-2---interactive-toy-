input.onButtonPressed(Button.A, function () {
    x = randint(0, 3)
})
input.onGesture(Gesture.LogoUp, function () {
    direction = 2
    if (x == direction) {
        music.playMelody("C E G C5 G E C - ", 120)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (x == 1) {
        music.playMelody("C E G C5 G E C - ", 120)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    direction = 0
    if (x == direction) {
        music.playMelody("C E G C5 G E C - ", 120)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    direction = 3
    if (x == direction) {
        music.playMelody("C E G C5 G E C - ", 120)
    }
})
let x = 0
let direction = 0
direction = 0
basic.forever(function () {
    if (x == 0) {
        basic.showArrow(ArrowNames.East)
    } else if (x == 1) {
        basic.showArrow(ArrowNames.West)
    } else if (x == 2) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
