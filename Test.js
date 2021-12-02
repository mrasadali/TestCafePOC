import { Selector } from 'testcafe';

fixture `Google Test`
    .page("www.google.com");

test("should contain the search box", async  t =>{
    const text = Selector('.SIvCob');
    await t
    .typeText('.gLFyf', 'Test Cafe')
    .expect(text.textContent).contains('Google offered in:  ');
    console.log('Case passed');
});