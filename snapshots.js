const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {

    await page.goto('http://localhost:3000/users');
    await percySnapshot('Users');

    // await page.click('a[modal=manageSmsModal]');  //manageSmsModal
    // await page.waitFor(2000);
    // await percySnapshot('itemDetails');
});