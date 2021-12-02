
import StudentsForm from '../Page/FormPage.js';


const pageObjects = new StudentsForm();
fixture("UI Test Practise Form")
    .page("http://uitestpractice.com/")
    
    test.page("http://uitestpractice.com/Students/Form")("should go to form page", async t=> {
    
    await t
    .typeText(pageObjects.firstName, "Asad")
    .typeText(pageObjects.lastName, "Khan")
    .click(pageObjects.maritialStatus)
    .click(pageObjects.selectCountry)
    .click(pageObjects.selectCountryopt.withText("Angola"))
    .expect(pageObjects.selectCountry.value).eql("Angola")
    .click(pageObjects.hobby)
    .typeText(pageObjects.phoneNumber, "090078601")
    .expect(pageObjects.phoneNumber.value).eql("090078601")
    .typeText(pageObjects.userName, "mr.asadAli")
    .typeText(pageObjects.email, "asadkhan@gmail.com")
    .typeText(pageObjects.comment, "This is the comment section to test the comment in UITest Practise Website by TestCafe.js")
    .typeText(pageObjects.password, "AsadAliKhan")
    .click(pageObjects.submit)

});