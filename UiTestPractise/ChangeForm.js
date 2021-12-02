import {Selector} from 'testcafe';

fixture("Redirects to form by clicking")
    .page("http://uitestpractice.com/")

    const form = Selector("//a[contains(text(), 'Form')]")

test("Should click the form", async t=>{
    await t
        .click(form)
});