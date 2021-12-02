import { Selector } from "testcafe";

export default class StudentsForm{
    constructor(){
        
    this.firstName = Selector('#firstname')
    this.lastName = Selector('#lastname');
    
    this.selectCountry = Selector("#sel1")
    this.selectCountryopt= this.selectCountry.find("option")
    this.maritialStatus = Selector("label").withText('Married')
    this.hobby = Selector('label').withText("Cricket");
    this.phoneNumber = Selector("#phonenumber")
    this.userName = Selector("#username")
    this.email = Selector("#email")
    this.comment= Selector("#comment")
    this.password = Selector("#pwd")
    this.submit = Selector('button').withText("Submit")
}
}