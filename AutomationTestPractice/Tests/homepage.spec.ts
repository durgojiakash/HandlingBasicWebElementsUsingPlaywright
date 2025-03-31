import { homepagefunc } from "../BusinessKeywords/homepagefunc";

import { expect, Page, test } from "@playwright/test";

//Note:- This Project is represents handling different Web Elements and does not represent any Framework Type (Except POM) 

test('First',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(700);

    await expect.soft(page).toHaveTitle("Automation Testing Practice")

    const homepage1 = new homepagefunc(page);

    await homepage1.handlingDifferentElements();
})