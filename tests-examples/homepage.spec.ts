import {test} from '@playwright/test'

test('Homepage',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='name']").fill("Akash");

    await page.locator("//input[@id='email']").fill("AkashVinay#gmail.com");

    await page.locator("//input[@id='phone']").fill("7845651292");

    let days = await page.locator("//div[@class='form-group']/descendant::label[@class='form-check-label']").all();

    for(let selectday of days){

        await selectday.click();

    }

    const drop = await page.locator("//select[@id='country']")

    await page.locator("//select[@id='country']").click();

    await drop.selectOption('france');


    await page.locator("//input[@id='Wikipedia1_wikipedia-search-input']").fill("Heaven");

    await page.waitForTimeout(700);
})