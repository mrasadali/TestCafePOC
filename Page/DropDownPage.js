import{Selector} from 'testcafe'

export default class DropDown{

    constructor(){
        this.singleDropDown = Selector("#countriesSingle")
        this.selectDropDownValue = this.singleDropDown.find("option")
        
    }
}