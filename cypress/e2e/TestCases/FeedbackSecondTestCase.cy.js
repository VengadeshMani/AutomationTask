import firstPageForm from "../PageObject/firstPagePOM";
import secondData from "../../fixtures/FeedbackSecondData.json";
import thirdPageForm from "../PageObject/thirdPagePOM";

describe('Feedback form with Apply to all Concept',()=>{

    before('Browser launch',()=>{
        cy.visit(secondData.url);
        firstPageForm.checkTitle();
    })

    it('Fill the Feedback form with Apply to all Concept',()=>{

        // First Page 
        // Verify the details
        firstPageForm.verifyClientName(secondData.checkClientName);
        firstPageForm.verifyDestination(secondData.checkDestination);
        firstPageForm.verifyDateofTravel(secondData.checkDateTravel);
        firstPageForm.verifyConsultant(secondData.checkConsultant);
        firstPageForm.verifyFileID(secondData.checkFileId);

        firstPageForm.typeName(secondData.nameType);
        firstPageForm.typeChooseTrip(secondData.chooseTrip);
        firstPageForm.typeTripForYou(secondData.tripForYou);
        firstPageForm.typeImproveTrip(secondData.improveTrip);
        firstPageForm.typeSuggestService(secondData.suggestImprove);

        // Pre Tip Service
        firstPageForm.selectAllFields(secondData.name,secondData.number);
        // Itinerary
        firstPageForm.selectAllFields(secondData.name1,secondData.number1);
        // Guides & Escorts
        firstPageForm.selectAllFields(secondData.name2,secondData.number2);
        // Vamoos App
        firstPageForm.selectAllFields(secondData.name3,secondData.number3);
        firstPageForm.nextButton();
        
        // Second Page
        // 11-Jun The Intercontinental O.R. Tambo
        firstPageForm.selectAllFields(secondData.name4,secondData.number4);
        // 12-Jun Okavango Explorers Camp
        firstPageForm.selectAllFields(secondData.name5,secondData.number5);
        // 15-Jun Tuludi Camp
        firstPageForm.selectAllFields(secondData.name6,secondData.number6);
        // 18-Jun San Camp
        firstPageForm.selectAllFields(secondData.name7,secondData.number7);
        // 20-Jun Inflight
        firstPageForm.selectAllFields(secondData.name8,secondData.number8);
        // 21-Jun Welcome Home
        firstPageForm.selectAllFields(secondData.name9,secondData.number9);
        firstPageForm.nextButton();
       
        //third page form
        thirdPageForm.selectBookAgain(secondData.text,secondData.bookAgain);
        thirdPageForm.selectReference(secondData.text1,secondData.reference);
        thirdPageForm.typeStatementcompanywebsite(secondData.statementcompanywebsite);
        thirdPageForm.selectNextPlaceTravel(secondData.text2,secondData.nextPlaceTravel);

        thirdPageForm.selectAfricanContinent(secondData.text3,secondData.africanContinent);
        thirdPageForm.selectIndianSubContinent(secondData.text4,secondData.indianSubContinent);
        thirdPageForm.selectLatinAmerica(secondData.text5,secondData.latinAmerica);
        thirdPageForm.selectAustralia(secondData.text6,secondData.australia);
        thirdPageForm.selectMiddleEast(secondData.text7,secondData.middleEast);
        thirdPageForm.selectPolar(secondData.text8,secondData.polar);
        thirdPageForm.selectExperiencesAppeal(secondData.text9,secondData.experiencesAppeal);
         // additionalfeedback text
         thirdPageForm.typeAdditionalFeedback(secondData.additionalFeedbackText);

         //sumbit button 
         thirdPageForm.finalSubmitButton();
    })
})