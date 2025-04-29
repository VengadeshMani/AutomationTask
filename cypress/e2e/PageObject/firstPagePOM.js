class firstPagePOM {

elements = {

    nameInput: () => cy.get("#name"),

    chooseTripInput: () => cy.get("#95"),

    tripForYouInput: () => cy.get("#96"),

    improveTripInput :() => cy.get("#97"),

    suggestServiceInput : () => cy.get("#98"),

    nextPage: ()=> cy.xpath("//button[text()='Next']"),

    titlename: () => cy.xpath("//h2[contains(text(),'Safari Feedback Form')]")
}

    typeName(name)
    {
        this.elements.nameInput().type(name);
        this.elements.nameInput().should('have.value', name);
    }

    typeChooseTrip(enterText)
    {
        this.elements.chooseTripInput().type(enterText);
        this.elements.chooseTripInput().should('have.value', enterText);
    }

    typeTripForYou(enterText)
    {
        this.elements.tripForYouInput().type(enterText);
        this.elements.tripForYouInput().should('have.value', enterText);
    }

    typeImproveTrip(enterText)
    {
        this.elements.improveTripInput().type(enterText);
        this.elements.improveTripInput().should('have.value', enterText);
    }

    typeSuggestService(enterText)
    {
        this.elements.suggestServiceInput().type(enterText);
        this.elements.suggestServiceInput().should('have.value', enterText);
    }

    // Check Title
    checkTitle()
    {
      this.elements.titlename().should('be.visible');
    }

    verifyClientName(name)
    {
        cy.xpath(`//div[strong[text()='Client'] and text()='${name}']`).should('be.visible');
    }

    verifyDestination(name)
    {
        cy.xpath(`//div[strong[text()='Destination'] and text()='${name}']`).should('be.visible');
    }

    verifyDateofTravel(name)
    {
        cy.xpath(`//div[strong[text()='Date of Travel (DOT)'] and text()='${name}']`).should('be.visible');
    }

    verifyConsultant(name)
    {
        cy.xpath(`//div[strong[text()='Consultant'] and text()='${name}']`).should('be.visible');
    }

    verifyFileID(name)
    {
        cy.xpath(`//div[strong[text()='File ID'] and text()='${name}']`).should('be.visible');
    }


    // Pre Tip Service
    //Handling of phone calls
    selectPreHandlingPhoneCalls(textValue)
    {
        cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue}'])[1]`).click();
    }
        
    //Consultant Knowledge
    selectPreConsultantKnowledge(textValue)
    {
    cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue}'])[2]`).click();
    }
    
    //Responsiveness to your requests
    selectPreResponsiveness(textValue)
    {
    cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue}'])[3]`).click();
    }   
    
    //Presentation of Documentation
    selectPrePresentation(textValue)
    {
    cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue}'])[4]`).click();
    }

    //Invoice Presentation
    selectPreInvoice(textValue)
    {
    cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue}'])[5]`).click();
    }

    //Clothing/Equipment List
    selectPreClothing(textValue)
    {
    cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue}'])[6]`).click();
    }
    
    //Pre-departure information
    selectPredeparture(textValue)
    {
    cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue}'])[7]`).click();
    }

    selectAllFields(labelText,textValue)
    {
        cy.xpath(`//div[@class='selected_title' and h3[text()='${labelText}']]//button[span[text()='${textValue}']]`).click();
    }

    //Itinerary

    // Itinerary routing
    selectItineraryRouting(textValue)
    {
    cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue}'])[1]`).click();
    }

    //Itinerary pace
    selectItineraryPace(textValue)
    {
    cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue}'])[2]`).click();
    }

    //Itinerary length
    selectItineraryLength(textValue)
    {
    cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue}'])[3]`).click();
    }

    //Variety of experiences
    selectItineraryVariety(textValue)
    {
    cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue}'])[4]`).click();
    }
    //Accomodation choices
    selectItineraryAccomodation(textValue)
    {
    cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue}'])[5]`).click();
    }

    //Transfers
    selectItineraryTransfers(textValue)
    {
    cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue}'])[6]`).click();
    }
    //Activities
    selectItineraryActivities(textValue)
    {
    cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue}'])[7]`).click();
    }

    // 3. Guides & Escorts

    //Welcome & orientation
    selectGuidesWelcome(textValue)
    {
    cy.xpath(`(//label[text()='Welcome & orientation']/following::button[text()='${textValue}'])[1]`).click();
    }
    //Enthusiasm & professionalism
    selectGuidesEnthusiasm(textValue)
    {
    cy.xpath(`(//label[text()='Welcome & orientation']/following::button[text()='${textValue}'])[2]`).click();
    }
    //Knowledge
    selectGuidesKnowledge(textValue)
    {
    cy.xpath(`(//label[text()='Welcome & orientation']/following::button[text()='${textValue}'])[3]`).click();
    }
    //Overall Rating
    selectGuidesOverallRatingPage(textValue)
    {
    cy.xpath(`(//label[text()='Welcome & orientation']/following::button[text()='${textValue}'])[4]`).click(); 
    } 

    //4.Vamoos App

     //Instructions for download
     selectVamoosInstructions(textValue)
     {
     cy.xpath(`(//label[text()='Instructions for download']/following::button[text()='${textValue}'])[1]`).click();
     }
     //Is it useful
     selectVamoosUseful(textValue)
     {
     cy.xpath(`(//label[text()='Instructions for download']/following::button[text()='${textValue}'])[2]`).click();
     }
     //Is it easy to navigate
     selectVamoosEasyNavigate(textValue)
     {
     cy.xpath(`(//label[text()='Instructions for download']/following::button[text()='${textValue}'])[3]`).click();
     }
     //Overall Rating
     selectVamoosOverallRatingPage(textValue)
     {
     cy.xpath(`(//label[text()='Instructions for download']/following::button[text()='${textValue}'])[4]`).click();
     }

     nextButton(){
        this.elements.nextPage().click();
     }

}

module.exports=new firstPagePOM();