class thirdPagePOM {

    elements = {

       provideStatement: () => cy.xpath("(//textarea[@rows='3'])[1]"),

       closebuttonDropDown: () => cy.xpath("//div[@data-pc-section='panel']//button[@type='button']"),

       additionalFeedbackInput: () => cy.xpath("//textarea[@rows='4']"),

       submitButton:()=> cy.xpath("//button[text()='Submit']"),

       backButton:()=> cy.xpath("//button[contains(text(),'Back')]")
    }

    //Would you book with us again?
    selectBookAgain(text,valueChoose) {
        cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//span[contains(text(),'Select options')]`).click();
        cy.xpath(`//ul//li[@role='option']//child::span[text()='${valueChoose}']`).click();
    }

    //May we use you as a reference?
    selectReference(text,valueChoose2) {
       cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//span[contains(text(),'Select options')]`).click(); 
       cy.xpath(`//ul//li[@role='option']//child::span[text()='${valueChoose2}']`).click();
    }

    // Please provide a statement which we may use as a testimonial on our company website?
    typeStatementcompanywebsite(text) {
        this.elements.provideStatement().type(text);
        this.elements.provideStatement().should('have.value', text);
    }

    //When do you think you will travel next?
    selectNextPlaceTravel(text,valueChoose3) {
       cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//span[contains(text(),'Select options')]`).click(); 
       cy.xpath(`//ul//li[@role='option']//child::span[text()='${valueChoose3}']`).click();
    }

    // ******** Which destinations/types of safaris interest you?: ****///

    // African Continent
    selectAfricanContinent(text,valueChoose) {
       cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//div[contains(text(),'Select options')]`).click(); 
       cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose}']`).click();
       // close
       this.elements.closebuttonDropDown().click();
    }

    // Indian Sub-Continent
    selectIndianSubContinent(text,valueChoose) {
      cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//div[contains(text(),'Select options')]`).click(); 
      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose}']`).click();
      // close
      this.elements.closebuttonDropDown().click();
    }

    // Latin America
    selectLatinAmerica(text,valueChoose) {
      cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//div[contains(text(),'Select options')]`).click(); 
      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose}']`).click();
      // close
      this.elements.closebuttonDropDown().click();
    }

    // Australia
    selectAustralia(text,valueChoose) {
      cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//div[contains(text(),'Select options')]`).click(); 
      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose}']`).click();
      // close
      this.elements.closebuttonDropDown().click();
    }

    // Middle East
    selectMiddleEast(text,valueChoose) {
      cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//div[contains(text(),'Select options')]`).click(); 
      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose}']`).click();
      // close
      this.elements.closebuttonDropDown().click();
    }

    // Polar
    selectPolar(text,valueChoose) {
      cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//div[contains(text(),'Select options')]`).click();  
      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose}']`).click();
      // close
      this.elements.closebuttonDropDown().click();
    }

    // Experiences that appeal to you
    selectExperiencesAppeal(text,valueChoose) {
      cy.xpath(`//label[contains(text(),'${text}')]/following-sibling::div[1]//div[contains(text(),'Select options')]`).click(); 
      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose}']`).click();
      // close
      this.elements.closebuttonDropDown().click();
    }
    // Additional Feedback:
    typeAdditionalFeedback(text) {
      this.elements.additionalFeedbackInput().type(text);
      this.elements.additionalFeedbackInput().should('have.value', text);
    }

    finalSubmitButton()
    {
      this.elements.submitButton().click();
    }

    finalPageBackButton()
    {
      this.elements.backButton().click();
    }

}

module.exports=new thirdPagePOM();






