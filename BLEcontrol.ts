//% color=#5C2D91 icon="\uf205"
//%advanced=true weight=100 
namespace Control {
    enum Colors {
        none = 0,
        cyan=1
    }

//%blockId="MCCsendToChat"
//%block="send $message to chat || $color"
//%group="Minecraft"
//%advanced=true
export function sendToChat(message: string, color: Colors) {
    switch (color) {
        case Colors.ledOn:
            keyboard.sendString("t")
            basic.pause(80)
            keyboard.sendString("message")
            basic.pause(25)
            keyboard.sendString(keyboard.keys(keyboard._Key.enter))
            keyboard.sendString(keyboard.keys(keyboard._Key.escape))
            break
        case ScreenMode.ledOff:
            basic.clearScreen()
            break
        case ScreenMode.chessboard:
            basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                `)
            break
        case ScreenMode.invertedChessboard:
            basic.showLeds(`
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                `)
            break
    
}