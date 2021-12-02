import KeyClass from '/Users/aasad/Desktop/Testcafe_Poc/Page/KeysPage.js'

const keyObj = new KeyClass()
fixture("Short keys").page("https://the-internet.herokuapp.com/key_presses")

test("conatins the short keys ", async t =>{

    await t
        .pressKey(keyObj.ctrl)
        .expect(keyObj.result.innerText).contains("You entered: CONTROL")
});