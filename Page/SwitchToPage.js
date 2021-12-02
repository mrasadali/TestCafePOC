import { Selector } from "testcafe";

export default class SwitchClass{
    constructor(){

        this.iFrame = Selector("#mce_0_ifr")
        this.content = Selector('#tinymce')
    }
}