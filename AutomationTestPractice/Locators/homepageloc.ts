import {Page} from '@playwright/test'

export const homepageloc = {

    name : (page:Page) =>{
        return page.locator("//input[@id='name']")    //Using Xpath
    },

    email : (page:Page) =>{
        return page.getByPlaceholder("Enter Email")   //Using Playwright Locators
    },

    phone : (page:Page) =>{
        return page.locator("//input[@id='phone']")        
    },

    address : (page:Page) =>{
        return page.getByLabel("Address:")            //Using Playwright Locators
    },

    gender : (page:Page) =>{
        return page.getByText("Female")              //Using Playwright Locators 
    },

    days : (page:Page) =>{
        return page.locator("(//div[@class='form-group'])[4]/div")
    },

    countrySelection : (page:Page) =>{
        return page.locator("#country")              //Using css selector
    },
    
    uploadingFile : (page:Page) =>{
        return page.locator("#singleFileInput")             
    },

    uploadingMultipleFiles : (page:Page) =>{
        return page.locator("#multipleFilesInput")             
    },

    simpleAlert : (page:Page) =>{
        return page.locator("//button[@id='alertBtn']")             
    },

    mouseHover : (page:Page) =>{
        return page.locator("//button[normalize-space()='Point Me']")             
    },

    mouseDrag : (page:Page) =>{
        return page.locator("//p[normalize-space()='Drag me to my target']")             
    },

    mouseDrop : (page:Page) =>{
        return page.locator("//div[@id='droppable']")             
    },

    newTab : (page:Page) =>{
        return page.locator("//button[normalize-space()='New Tab']")             
    },
    

}