
describe('Feedback Form Test Script', () => {

    before('launch the browser', () => {

        cy.visit("https://dev-survey.classicsafaricompany.com.au/survey/form/85dc1a91e101269664cdeb655725c0?email=cherath.s@gmail.com");
    })

    it('All Fields are entered', () => {

        // Name Field
        cy.get("#name").type("Vengadesh").should('have.value', "Vengadesh");

        //Why did you choose trip ?
        cy.get("#95").type("London").should('have.value', "London");

        // What were the most important aspects of this trip for you?

        cy.get("#96").type("Main Area").should('have.value', "Main Area");

        //Do you have any suggestions or changes you think would improve the trip?

        cy.get("#97").type("Reduce the feedback").should('have.value', "Reduce the feedback");

        //Please suggest ways to improve our service?

        cy.get("#98").type("Easy way to submit feedback").should('have.value', "Easy way to submit feedback");

    })

    it('Select the Pre Tip Service', () => {

        let textValue = '5'; // Set the value dynamically at runtime

        //Handling of phone calls
        cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue}'])[1]`).click();

        //Consultant Knowledge
        let textValue1 = '4';
        cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue1}'])[2]`).click();
        
        //Responsiveness to your requests
        let textValue2 = '3';
        cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue2}'])[3]`).click();

        //Presentation of Documentation
        let textValue3 = '2';
        cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue3}'])[4]`).click();

        //Invoice Presentation
        let textValue4 = '1';
        cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue4}'])[5]`).click();

        //Clothing/Equipment List
        let textValue5 = '3';
        cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue5}'])[6]`).click();

        //Pre-departure information
        let textValue6 = '5';
        cy.xpath(`(//label[text()='Handling of phone calls']/following::button[text()='${textValue6}'])[7]`).click();
    })

    it('Select the Itinerary', () => {

        let textValue = '1'; // Set the value dynamically at runtime

        //Variety of experiences

        cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue}'])[1]`).click();

        //Accomodation choices

        let textValue1 = '2';
        cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue1}'])[2]`).click();

        //Transfers
        let textValue2 = '3';
        cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue2}'])[3]`).click();

        //Activities
        let textValue3 = '4';
        cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue3}'])[4]`).click();

        //Itinerary routing
        let textValue4 = '5';
        cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue4}'])[5]`).click();

        //Itinerary pace
        let textValue5 = '1';
        cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue5}'])[6]`).click();

        //Itinerary length
        let textValue6 = '3';
        cy.xpath(`(//label[text()='Itinerary routing']/following::button[text()='${textValue6}'])[7]`).click();

    })

    it('Select the Guides & Escorts', () => {

        let textValue = '5'; // Set the value dynamically at runtime

        //Welcome & orientation
        cy.xpath(`(//label[text()='Welcome & orientation']/following::button[text()='${textValue}'])[1]`).click();

        //Enthusiasm & professionalism
        let textValue1 = '4';
        cy.xpath(`(//label[text()='Welcome & orientation']/following::button[text()='${textValue1}'])[2]`).click();

        //Knowledge
        let textValue2 = '3';
        cy.xpath(`(//label[text()='Welcome & orientation']/following::button[text()='${textValue2}'])[3]`).click();

        //Overall Rating
        let textValue3 = '2';
        cy.xpath(`(//label[text()='Welcome & orientation']/following::button[text()='${textValue3}'])[4]`).click();

    })

    it('Select the Vamoos App', () => {

        //Instructions for download
        let textValue = '1';
        cy.xpath(`(//label[text()='Instructions for download']/following::button[text()='${textValue}'])[1]`).click();

        //Is it useful
        let textValue1 = '2';
        cy.xpath(`(//label[text()='Instructions for download']/following::button[text()='${textValue1}'])[2]`).click();

        //Is it easy to navigate
        let textValue2 = '3';
        cy.xpath(`(//label[text()='Instructions for download']/following::button[text()='${textValue2}'])[3]`).click();

        //Overall Rating
        let textValue3 = '4';
        cy.xpath(`(//label[text()='Instructions for download']/following::button[text()='${textValue3}'])[4]`).click();

        cy.xpath("//button[text()='Next']").click();
    })

    // Second Page
    it('Select the Jun The Intercontinental O.R. Tambo', () => {

        // Accomodation
        let textValue = '4';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[1]`).click();

        // Staff & Service
        let textValue1 = '3';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue1}'])[2]`).click();

        // Guiding Experience
        let textValue2 = '2';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue2}'])[3]`).click();

        // Safety & Environment
        let textValue3 = '1';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue3}'])[4]`).click();
    })

    it('Select the Jun Okavango Explorers Camp', () => {

        // Accomodation
        let textValue = '1';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[5]`).click();

        // Staff & Service
        let textValue1 = '2';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue1}'])[6]`).click();

        // Guiding Experience
        let textValue2 = '3';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue2}'])[7]`).click();

        // Safety & Environment
        let textValue3 = '4';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue3}'])[8]`).click();
    })

    it('Select the 15-Jun Tuludi Camp', () => {

        // Accomodation
        let textValue = '2';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[9]`).click();

        // Staff & Service
        let textValue1 = '3';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue1}'])[10]`).click();

        // Guiding Experience
        let textValue2 = '2';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue2}'])[11]`).click();

        // Safety & Environment
        let textValue3 = '3';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue3}'])[12]`).click();
    })


    it('Select the 18-Jun San Camp', () => {

        // Accomodation
        let textValue = '4';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[13]`).click();

        // Staff & Service
        let textValue1 = '3';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue1}'])[14]`).click();

        // Guiding Experience
        let textValue2 = '2';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue2}'])[15]`).click();

        // Safety & Environment
        let textValue3 = '1';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue3}'])[16]`).click();
    })

    it('Select the 20-Jun Inflight', () => {

        // Accomodation
        let textValue = '3';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[17]`).click();

        // Staff & Service
        let textValue1 = '1';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue1}'])[18]`).click();

        // Guiding Experience
        let textValue2 = '2';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue2}'])[19]`).click();

        // Safety & Environment
        let textValue3 = '1';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue3}'])[20]`).click();
    })

    it('Select the 21-Jun Welcome Home', () => {

        // Accomodation
        let textValue = '2';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[21]`).click();

        // Staff & Service
        let textValue1 = '3';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue1}'])[22]`).click();

        // Guiding Experience
        let textValue2 = '4';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue2}'])[23]`).click();

        // Safety & Environment
        let textValue3 = '1';
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue3}'])[24]`).click();

        cy.xpath("//button[text()='Next']").click();
    })

    // third Page

    it('Destination Feedback:', () => {

        //Would you book with us again?

        cy.xpath("(//label[text()='Would you book with us again?']//following::span[text()='Select options'])[1]").click();
        let valueChoose = 'Yes';
        cy.xpath(`//ul//li[@role='option']//child::span[text()='${valueChoose}']`).click();

        //May we use you as a reference?

        cy.xpath("(//label[text()='Would you book with us again?']//following::span[text()='Select options'])[1]").click();
        let valueChoose2 = 'No';
        cy.xpath(`//ul//li[@role='option']//child::span[text()='${valueChoose2}']`).click();

        // Please provide a statement which we may use as a testimonial on our company website?

        cy.xpath("(//textarea[@rows='3'])[1]").type("easily fill the details").should('have.value','easily fill the details');
        //When do you think you will travel next?

        cy.xpath("(//label[text()='Would you book with us again?']//following::span[text()='Select options'])[1]").click();
        let valueChoose3 = '1 year';
        cy.xpath(`//ul//li[@role='option']//child::span[text()='${valueChoose3}']`).click();

    })

    it('Which destinations/types of safaris interest you?:', () => {

        //African Continent

        cy.xpath("(//label[text()='African Continent']//following::div[text()='Select options'])[1]").click();
        let valueChoose = 'Namibia';
      //  cy.xpath("//ul//li//div[@data-pc-name='checkbox']/following::span[text()='Namibia']").click();
      //  cy.xpath(`//ul//li[@role='option']//child::span[text()='${valueChoose}']`).click();

      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose}']`).click();
      // close
      cy.xpath("//div[@data-pc-section='panel']//button[@type='button']").click();

      // Indian Sub-Continent
      cy.xpath("(//label[text()='African Continent']//following::div[text()='Select options'])[1]").click();
      let valueChoose1 = 'Kerala';

    cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose1}']`).click();
    // close
    cy.xpath("//div[@data-pc-section='panel']//button[@type='button']").click();


    //Latin America
    cy.xpath("(//label[text()='African Continent']//following::div[text()='Select options'])[1]").click();
    let valueChoose2 = 'Brazil';

  cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose2}']`).click();
  // close
  cy.xpath("//div[@data-pc-section='panel']//button[@type='button']").click();

        //Australia

        cy.xpath("(//label[text()='African Continent']//following::div[text()='Select options'])[1]").click();
        let valueChoose3 = 'Luxury Cruise';
    
      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose3}']`).click();
      // close
      cy.xpath("//div[@data-pc-section='panel']//button[@type='button']").click();

      //Middle East
      cy.xpath("(//label[text()='African Continent']//following::div[text()='Select options'])[1]").click();
      let valueChoose4 = 'Jordan';
  
    cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose4}']`).click();
    // close
    cy.xpath("//div[@data-pc-section='panel']//button[@type='button']").click();


    //Polar
    cy.xpath("(//label[text()='African Continent']//following::div[text()='Select options'])[1]").click();
    let valueChoose5 = 'Antartica';

  cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose5}']`).click();
  // close
  cy.xpath("//div[@data-pc-section='panel']//button[@type='button']").click();

        //Experiences that appeal to you
        cy.xpath("(//label[text()='African Continent']//following::div[text()='Select options'])[1]").click();
        let valueChoose6 = 'Food';
    
      cy.xpath(`//ul//li//div[@data-pc-name='checkbox']/following::span[text()='${valueChoose6}']`).click();
      // close
      cy.xpath("//div[@data-pc-section='panel']//button[@type='button']").click();
    
        //Additional Feedback:
        cy.xpath("//textarea[@rows='4']").type("Completed task");


    })


})