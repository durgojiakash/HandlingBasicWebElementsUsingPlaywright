import { Page } from '@playwright/test'
import { homepageloc } from '../Locators/homepageloc';

export class homepagefunc {

    page: any;

    constructor(page: Page) {
        this.page = page
    }

    async handlingDifferentElements() {

        //Handling Web Elements
        //TextField
        await homepageloc.name(this.page).fill("Akash D");
        await homepageloc.email(this.page).fill("DemoURL@gmail.com");
        await homepageloc.phone(this.page).fill("784#65#292");

        //TextArea
        await homepageloc.address(this.page).fill("This is Sample Address");

        //Cheeckbox
        await homepageloc.gender(this.page).click();

        //Choosing required Checkboxes
        const dayselection = await homepageloc.days(this.page).all();
        for (const days of dayselection) {
            const dayName = await days.textContent();
            if (dayName && (dayName.includes("Sunday") || dayName.includes("Wednesday") || dayName.includes("Friday"))) {
                await days.click();
            }
        }

        //Dropdown
        await homepageloc.countrySelection(this.page).selectOption({ value: "germany" });

        //Attachments - Uploading Single and Multiple Attachments
        await homepageloc.uploadingFile(this.page).setInputFiles("Files/Man.jpg");
        await homepageloc.uploadingMultipleFiles(this.page).setInputFiles(["Files/Man.jpg", "Files/Women.jpg"]);

        //Pagination WebTable
        const rows = await this.page.locator("//table[@id='productTable']/tbody/tr");
        const pagination = await this.page.locator("//ul[@id='pagination']/li").count();

        for (let j = 1; j < pagination; j++) {
            for (let i = 1; i <= rows.count(); i++) {
                const productName = await this.page.locator(`//table[@id='productTable']/tbody/tr[${i}]/td[2]`).textContent();
                if (productName.includes("Smartphone") || productName.includes("Digital Camera") || productName.includes("Action Camera") || productName.includes("Soundbar")) {
                    await this.page.locator(`//table[@id='productTable']/tbody/tr[${i}]/td[4]/input`).click();
                    await this.page.waitForTimeout(2000)
                }
            }
            if (pagination >= 1) {
                await this.page.locator(`//ul[@id='pagination']/li[${j + 1}]`).click();
            }
        }

        //Alerts
        await homepageloc.simpleAlert(this.page).click({ force: true });
        await this.page.on('Simple Alert', dialog => {
            dialog.accept();
        })

        //Mouse Actions
        //Hover
        await homepageloc.mouseHover(this.page).hover();
        //Darg and Drop
        await homepageloc.mouseDrag(this.page).dragTo(homepageloc.mouseDrop(this.page));

        //Handling New Page
        const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        homepageloc.newTab(this.page).click()]);
        await newPage.waitForLoadState();
        console.log(await newPage.title());


    }
}