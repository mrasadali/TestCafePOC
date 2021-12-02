import {Selector} from 'testcafe'

export default class KeyClass {

    constructor(){

        this.space = 'space'
        this.enter = 'enter'
        this.tab = 'tab'
        this.ctrl = 'ctrl'
        this.ctrlC = 'ctrl + C'
        this.ctrlZ = 'ctrl + Z'
        this.result = Selector('#result')
    }
}