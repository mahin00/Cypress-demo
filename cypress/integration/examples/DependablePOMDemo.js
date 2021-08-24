
require('cypress-xpath')
import HomePage from '../PageObjects/HomePage'
const home = new HomePage()

import locator from "../PageObjects/locator"
const locator1 = new locator()

describe("Dependable Website Demo test",()=>{
    afterEach("waiting",() => {
        home.waiting_for_certain_time(60)
      })
    it("Visiting the Website",()=>{
        
        home.visit(locator1.url)
    })
    it("going to the bottom", ()=>{
        home.scrolling_to_bottom()
    })
    it("Clicking On the find out button",()=>
    {
        home.clicking_on_contains_text("FIND OUT MORE")
        home.url_should_include('licensing-automation-summit-us')
        
    })
    it("going back previous page",()=>{
        home.going_previous_page()
        home.scrolling_to_bottom()
    })
    
    it("Subscribing email",()=>{
        home.clicking_on_contains_text("Subscribe")
        home.subscribing(locator1.subscribeLocator,"anisken@gmail.com")
        home.url_should_include("subscribe-thank-you")
        home.going_previous_page()
    })

    
    it("hovering over dependables option",()=>{
        home.scrolling_to_top()
        home.waiting_for_certain_time(5000)
        home.hovering_on_element(locator1.dependablesHeader)
        
    })
    
    it("clicking on contact page",()=>{
        home.clicking_using_xpath(locator1.contact)
        home.url_should_include("contact")
    })
    it("Filling Up form", ()=>{
        home.writting_on_input(locator1.contact_input_name,"demoData")
        home.writting_on_input(locator1.contact_input_title,"demoData")
        home.writting_on_input(locator1.contact_input_company,"demoData")
        home.writting_on_input(locator1.contact_input_phone,"5555555555")
        home.writting_on_input(locator1.contact_input_email,"demodata@gmail.com")
        home.select_dropdown_menu(locator1.contact_input_type,"Send more information.")
        home.writting_on_input(locator1.contact_input_comment,"This is demo data")
        home.clicking(locator1.submit_btn)
        home.waiting_for_certain_time(3000)
        home.url_should_include("contact-thank-you")
    })
    it("going back previous page",()=>{
        home.going_previous_page()
        home.going_previous_page()
        home.scrolling_to_top()
        home.waiting_for_certain_time(2000)
    })
    it("clicking on event", ()=>{
        home.clicking(locator1.eventBtn)
        home.scrolling_to_bottom()
    })
    it("hovering on all Brand Licensing Software section", ()=>{
        cy.xpath(locator1.brandLicense).nextAll().realHover()
    })
    it("clicking licenseing contract option", ()=>
    {
        cy.xpath(locator1.learnmore).click()
        home.going_previous_page()
    })
    it("going back previous page",()=>{
        home.going_previous_page()
        home.scrolling_to_top()
        home.waiting_for_certain_time(2000)
    })
    it("scrolling to the what we do best section", ()=>{
        home.scrolling_to_content(locator1.whatWedobest)
    })
    it("clicking on 2nd option",()=>{
        cy.xpath(locator1.secondoptionxpath).click()
    })
    it("clicking on 3rd option",()=>{
        cy.xpath(locator1.thrdoptionxpath).click()
    })
    it("clicking on 4th option",()=>{
        cy.xpath(locator1.fourthoptionxpath).click()
    })
    it("clicking on 5th option",()=>{
        cy.xpath(locator1.fifthoptionxpath).click()
    })

    it("scrolling to the who we help option", ()=>{
        home.scrolling_to_content(locator1.whowillhelp)
    })
    it("clicking on 2nd option(brand owners)",()=>{
        home.clicking_using_xpath(locator1.helpsecondOptionXpath)
    })
    it("clicking on 3rd option(brand owners)",()=>{
        home.clicking_using_xpath(locator1.helpThirdOptionxpath)
    })
    it("clicking on 4th option(brand owners)",()=>{
        home.clicking_using_xpath(locator1.helpforthoptionxpath)
    })
    it("going to the partner section",()=>{
        home.clicking_using_xpath(locator1.partnerURL)
    })
    it("continue reading first paragraph",()=>{
        home.clicking_using_xpath(locator1.firstparagraph)
        home.going_previous_page()
        
    })
    it("continue reading second paragraph",()=>{
        home.clicking_using_xpath(locator1.secondparagraph)
        home.going_previous_page()
    })
    it("continue reading third paragraph",()=>{
        home.clicking_using_xpath(locator1.thirdparagraph)
        home.going_previous_page()
    })
    it("going to the music and media royalty option",()=>{
        home.clicking_using_xpath(locator1.MusicandMediaRoyalty)
        home.scrolling_to_content(locator1.contentsection1)
        home.scrolling_to_bottom()
    })
    it("going to the career option",()=>{
        home.clicking_using_xpath(locator1.career)
    })
    it("Clicking on all career",()=>{
        
        cy.get(".careers-list").each(($el)=>{
            cy.wrap($el).click()
        })
        
    })
    // it("clicking on all solutions submenu",()=>{
    //     cy.get("#menu-item-899 > .sub-menu").each($el=>{
    //         home.hovering_on_element(locator1.dependablesHeader)
    //         cy.wrap($el).click()
            
    //     })
    // })




})