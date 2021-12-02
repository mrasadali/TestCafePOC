import {Selector} from 'testcafe'
import SwitchClass from '/Users/aasad/Desktop/Testcafe_Poc/Page/SwitchToPage.js';

const SwitchObj = new SwitchClass()

fixture('To test the alerts and iFrames')
    .page("https://the-internet.herokuapp.com/iframe")

test("should contains handling of iFrames", async t =>{

    await t
        .maximizeWindow()
        .switchToIframe(SwitchObj.iFrame)
        .typeText(SwitchObj.content, "Hi i am writing in the iFrame and accessing it by using iFrame component")
        .switchToMainWindow()
        
});

const number = Selector('#selectable')
const selectNumber = number.find('li').nth(6)
test.page("http://uitestpractice.com/Students/Actions")("test the alert", async t => {
    await t
    .dragToElement('#draggable', '#droppable')
    //.expect("#droppable".value).eql("Dropped!")
    .hover(".col-md-4")
    .click(selectNumber.withText("seven"))

}, 3000);


