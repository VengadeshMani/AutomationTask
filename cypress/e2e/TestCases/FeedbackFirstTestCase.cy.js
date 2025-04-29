import firstPageForm from "../PageObject/firstPagePOM";
import firstPageData from "../../fixtures/firstPageData.json";
import secondPageForm from "../PageObject/secondPagePOM";
import secondPageData from "../../fixtures/secondPageData.json";
import thirdPageForm from "../PageObject/thirdPagePOM";
import thirdPageData from "../../fixtures/thirdPageData.json";

describe('Safari Feedback Form ',()=>{

    before('Browser Launch',()=>{
        cy.visit(firstPageData.url);
        firstPageForm.checkTitle();
    })

    it('Fill the General Details',()=>{
        // Check the details
        firstPageForm.verifyClientName(firstPageData.checkClientName);
        firstPageForm.verifyDestination(firstPageData.checkDestination);
        firstPageForm.verifyDateofTravel(firstPageData.checkDateTravel);
        firstPageForm.verifyConsultant(firstPageData.checkConsultant);
        firstPageForm.verifyFileID(firstPageData.checkFileId);
        // Enter the details
        firstPageForm.typeName(firstPageData.name);
        firstPageForm.typeChooseTrip(firstPageData.chooseTrip);
        firstPageForm.typeTripForYou(firstPageData.tripForYou);
        firstPageForm.typeImproveTrip(firstPageData.improveTrip);
        firstPageForm.typeSuggestService(firstPageData.suggestImprove);
    })

    it('Select the Pre Tip Service',()=>{
        firstPageForm.selectPreHandlingPhoneCalls(firstPageData["pre-Handling"]);
        firstPageForm.selectPreConsultantKnowledge(firstPageData["pre-Consultant "]);
        firstPageForm.selectPreResponsiveness(firstPageData["pre-Responsiveness"]);
        firstPageForm.selectPrePresentation(firstPageData["pre-Presentation "]);
        firstPageForm.selectPreInvoice(firstPageData["pre-Invoice"]);
        firstPageForm.selectPreClothing(firstPageData["pre-Clothing"]);
        firstPageForm.selectPredeparture(firstPageData["pre-departure"]);
    })

    it('Select the Itinerary',()=>{
        firstPageForm.selectItineraryRouting(firstPageData["Itinerary-routing"]);
        firstPageForm.selectItineraryPace(firstPageData["Itinerary-pace"]);
        firstPageForm.selectItineraryLength(firstPageData["Itinerary-length"]);
        firstPageForm.selectItineraryVariety(firstPageData["Itinerary-Variety "]);
        firstPageForm.selectItineraryAccomodation(firstPageData["Itinerary-Accomodation"]);
        firstPageForm.selectItineraryTransfers(firstPageData["Itinerary-Transfers"]);
        firstPageForm.selectItineraryActivities(firstPageData["Itinerary-Activities"]);
    })

    it('Select the Guides & Escorts',()=>{
        firstPageForm.selectGuidesWelcome(firstPageData["Guides-Welcome"]);
        firstPageForm.selectGuidesEnthusiasm(firstPageData["Guides-Enthusiasm"]);
        firstPageForm.selectGuidesKnowledge(firstPageData["Guides-Knowledge"]);
        firstPageForm.selectGuidesOverallRatingPage(firstPageData["Guides-Overall"]);
    })

    it('Select the Vamoos App',()=>{
        firstPageForm.selectVamoosInstructions(firstPageData["Vamoos-Instructions"]);
        firstPageForm.selectVamoosUseful(firstPageData["Vamoos-useful"]);
        firstPageForm.selectVamoosEasyNavigate(firstPageData["Vamoos-navigate"]);
        firstPageForm.selectVamoosOverallRatingPage(firstPageData["Vamoos-OverallRating"]);
    })

    it('Page transitions from the First Page to the Next Page.',()=>{
        firstPageForm.nextButton();
    })

    // Second Page 
    
    it('Select the 11-Jun The Intercontinental O.R. Tambo',()=>{
        secondPageForm.selectJunAccomodation(secondPageData["jun-Accomodation"]);
        secondPageForm.selectJunStaff(secondPageData["jun-Staff"]);
        secondPageForm.selectJunGuiding(secondPageData["jun-Guiding"]);
        secondPageForm.selectJunSafety(secondPageData["jun-Safety"]);
    })

    it('Select the 12-Jun Okavango Explorers Camp',()=>{
        secondPageForm.selectJunOkavangoAccomodation(secondPageData["junOkavango-Accomodation"]);
        secondPageForm.selectJunOkavangoStaff(secondPageData["junOkavango-Staff"]);
        secondPageForm.selectJunOkavangoGuiding(secondPageData["junOkavango-Guiding"]);
        secondPageForm.selectJunOkavangoSafety(secondPageData["junOkavango-Safety"]);
    })

    it('Select the 15-Jun Tuludi Camp',()=>{
        secondPageForm.selectJunTuludiAccomodation(secondPageData["junTuludi-Accomodation"]);
        secondPageForm.selectJunTuludiStaff(secondPageData["junTuludi-Staff"]);
        secondPageForm.selectJunTuludiGuiding(secondPageData["junTuludi-Guiding"]);
        secondPageForm.selectJunTuludiSafety(secondPageData["junTuludi-Safety"]);
    })

    it('Select the 18-Jun San Camp',()=>{
        secondPageForm.selectJunSanAccomodation(secondPageData["junSan-Accomodation"]);
        secondPageForm.selectJunSanStaff(secondPageData["junSan-Staff"]);
        secondPageForm.selectJunSanGuiding(secondPageData["junSan-Guiding"]);
        secondPageForm.selectJunSanSafety(secondPageData["junSan-Safety"]);
    })

    it('Select the 20-Jun Inflight',()=>{
        secondPageForm.selectJunInflightAccomodation(secondPageData["junInflight-Accomodation"]);
        secondPageForm.selectJunInflightStaff(secondPageData["junInflight-Staff"]);
        secondPageForm.selectJunInflightGuiding(secondPageData["junInflight-Guiding"]);
        secondPageForm.selectJunInflightSafety(secondPageData["junInflight-Safety"]);
    })

    it('Select the 21-Jun Welcome Home',()=>{
        secondPageForm.selectJunWelcomeHomeAccomodation(secondPageData["junWelcomeHome-Accomodation"]);
        secondPageForm.selectJunWelcomeHomeStaff(secondPageData["junWelcomeHome-Staff"]);
        secondPageForm.selectJunWelcomeHomeGuiding(secondPageData["junWelcomeHome-Guiding"]);
        secondPageForm.selectJunWelcomeHomeSafety(secondPageData["junWelcomeHome-Safety"]);
    })

    it('Page transitions from the Second Page to the Next Page.',()=>{
        firstPageForm.nextButton();
    })

    // Third Page 
    it('Final Page Destination Feedback:',()=>{
        thirdPageForm.selectBookAgain(thirdPageData.text,thirdPageData.bookAgain);
        thirdPageForm.selectReference(thirdPageData.text1,thirdPageData.reference);
        thirdPageForm.typeStatementcompanywebsite(thirdPageData.statementcompanywebsite);
        thirdPageForm.selectNextPlaceTravel(thirdPageData.text2,thirdPageData.nextPlaceTravel);
    })

    it('Which destinations/types of safaris interest you?:',()=>{
        thirdPageForm.selectAfricanContinent(thirdPageData.text3,thirdPageData.africanContinent);
        thirdPageForm.selectIndianSubContinent(thirdPageData.text4,thirdPageData.indianSubContinent);
        thirdPageForm.selectLatinAmerica(thirdPageData.text5,thirdPageData.latinAmerica);
        thirdPageForm.selectAustralia(thirdPageData.text6,thirdPageData.australia);
        thirdPageForm.selectMiddleEast(thirdPageData.text7,thirdPageData.middleEast);
        thirdPageForm.selectPolar(thirdPageData.text8,thirdPageData.polar);
        thirdPageForm.selectExperiencesAppeal(thirdPageData.text9,thirdPageData.experiencesAppeal);
    })

    it('Final page Additional Feedback:',()=>{
        thirdPageForm.typeAdditionalFeedback(thirdPageData.additionalFeedbackText);
        thirdPageForm.finalSubmitButton();
    })

    

})