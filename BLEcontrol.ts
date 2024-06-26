//% color=#1E90FF icon="\uf205"
//%advanced=true weight=100 
namespace Control {
    export enum Colors {
        none = 1,
        cyan = 2,
        red = 3,
        random = 4
    }

    //%blockId="MCCsendToChat"
    //%block="send $message to chat || $color"
    //%group="Minecraft"
    //%advanced=true
    export function sendToChat(message: string, color: Colors = Colors.none) {
        switch (color) {
            case Colors.none:
                keyboard.sendString("t")
                basic.pause(80)
                keyboard.sendString(message)
                basic.pause(25)
                keyboard.sendString(keyboard.keys(keyboard._Key.enter))
                keyboard.sendString(keyboard.keys(keyboard._Key.escape))
                break
            case Colors.cyan:
                keyboard.sendString("t")
                basic.pause(80)
                keyboard.sendString("§b" + message)
                basic.pause(25)
                keyboard.sendString(keyboard.keys(keyboard._Key.enter))
                keyboard.sendString(keyboard.keys(keyboard._Key.escape))
                break
            case Colors.red:
                keyboard.sendString("t")
                basic.pause(80)
                keyboard.sendString("§m" + message)
                basic.pause(25)
                keyboard.sendString(keyboard.keys(keyboard._Key.enter))
                keyboard.sendString(keyboard.keys(keyboard._Key.escape))
                break
            case Colors.random:
                keyboard.sendString("t")
                basic.pause(80)
                keyboard.sendString("§k" + message)
                basic.pause(25)
                keyboard.sendString(keyboard.keys(keyboard._Key.enter))
                keyboard.sendString(keyboard.keys(keyboard._Key.escape))
                break
        }   
    }
    //%blockId="MCCopenChat"
    //%block="open chat"
    //%group="Minecraft"
    //%advanced=true
    export function openChat () {
        keyboard.sendString("t")
    }    
    //%blockId="MCCinventory"
    //%block="inventory"
    //%group="Minecraft"
    //%advanced=true
    export function inventory() {
        keyboard.sendString("e")
    }
    //%blockId="MCCinitialize"
    //%block="initialize BLE Control extension"
    //%group="Initialize"
    //%advanced=false
    export function initialize() {       
        keyboard.startKeyboardService()
    }
}