class secondPagePOM{

     elements = {
          backButtonPage2:()=> cy.xpath("//button[contains(text(),'Back')]")
     }


    // Second Page 

    // *********** 11-Jun The Intercontinental O.R. Tambo and Accomodation ****
    selectJunAccomodation(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[1]`).click();    
    }
    // Staff & Service
    selectJunStaff(textValue)
    {
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[2]`).click();
    }
    // Guiding Experience
    selectJunGuiding(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[3]`).click();   
    }
     // Safety & Environment
    selectJunSafety(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[4]`).click();
    }

    // *********** 12-Jun Okavango Explorers Camp and Accomodation ***********

    selectJunOkavangoAccomodation(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[5]`).click();    
    }
    // Staff & Service
    selectJunOkavangoStaff(textValue)
    {
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[6]`).click();
    }
    // Guiding Experience
    selectJunOkavangoGuiding(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[7]`).click();   
    }
     // Safety & Environment
    selectJunOkavangoSafety(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[8]`).click();
    }

    // *********** 15-Jun Tuludi Camp and Accomodation ***********

    selectJunTuludiAccomodation(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[9]`).click();    
    }
    // Staff & Service
    selectJunTuludiStaff(textValue)
    {
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[10]`).click();
    }
    // Guiding Experience
    selectJunTuludiGuiding(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[11]`).click();   
    }
     // Safety & Environment
    selectJunTuludiSafety(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[12]`).click();
    }

    // *********** 18-Jun San Camp and Accomodation ***********

    selectJunSanAccomodation(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[13]`).click();    
    }
    // Staff & Service
    selectJunSanStaff(textValue)
    {
        cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[14]`).click();
    }
    // Guiding Experience
    selectJunSanGuiding(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[15]`).click();   
    }
     // Safety & Environment
    selectJunSanSafety(textValue)
    {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[16]`).click();
    }

     // *********** 20-Jun Inflight and Accomodation ***********

     selectJunInflightAccomodation(textValue)
     {
          cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[17]`).click();    
     }
     // Staff & Service
     selectJunInflightStaff(textValue)
     {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[18]`).click();
     }
     // Guiding Experience
     selectJunInflightGuiding(textValue)
     {
          cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[19]`).click();   
     }
      // Safety & Environment
     selectJunInflightSafety(textValue)
     {
          cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[20]`).click();
     }
 
     // *********** 21-Jun Welcome Home and Accomodation ***********

     selectJunWelcomeHomeAccomodation(textValue)
     {
          cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[21]`).click();    
     }
     // Staff & Service
     selectJunWelcomeHomeStaff(textValue)
     {
         cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[22]`).click();
     }
     // Guiding Experience
     selectJunWelcomeHomeGuiding(textValue)
     {
          cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[23]`).click();   
     }
      // Safety & Environment
     selectJunWelcomeHomeSafety(textValue)
     {
          cy.xpath(`(//label[text()='Accomodation']/following::button[text()='${textValue}'])[24]`).click();
     }

       // Back Button
     clickBackButtonPage2()
     {
            this.elements.backButtonPage2().click();
     }

}
module.exports=new secondPagePOM();