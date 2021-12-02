import DropDown from '/Users/aasad/Desktop/Testcafe_Poc/Page/DropDownPage.js'

const DropDownObj = new DropDown()

fixture("Testing the dropdown")
    .page("http://uitestpractice.com/Students/Select")

test("should test the dropdowns", async t => {

    await t
        .click(DropDownObj.singleDropDown)
        .click(DropDownObj.selectDropDownValue.withText('China'))
});