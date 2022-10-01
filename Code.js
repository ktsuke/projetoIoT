input.onButtonPressed(Button.A, function () {
    if (jogador == 0) {
        jogador = 1
    }
    led.unplot(jogador, 4)
    jogador += -1
    led.plot(jogador, 4)
})
input.onButtonPressed(Button.AB, function () {
    if (game.isPaused()) {
        game.resume()
    } else {
        game.pause()
    }
})
input.onButtonPressed(Button.B, function () {
    if (jogador == 4) {
        jogador = 3
    }
    led.unplot(jogador, 4)
    jogador += 1
    led.plot(jogador, 4)
})
let barreira: number[] = []
let passagem = 0
let jogador = 0
music.playMelody("E D G F B A C5 B ", 400)
game.startCountdown(3000)
jogador = 0
let barreiraY = 5
basic.forever(function () {
    if (barreiraY == 5) {
        if (passagem != jogador) {
            game.gameOver()
        }
        barreiraY = 0
        passagem = randint(0, 4)
        barreira = []
        for (let i = 0; i <= 4; i++) {
            if (passagem != i) {
                barreira.push(i)
            }
        }
    }
    for (let j = 0; j <= 3; j++) {
        led.plot(barreira[j], barreiraY)
    }
    barreiraY += 1
    led.plot(jogador, 4)
    basic.pause(1000)
    basic.clearScreen()
})
