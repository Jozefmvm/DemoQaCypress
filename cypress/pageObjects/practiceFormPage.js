class PracticeFormPage {
    visit() {
      cy.visit('https://demoqa.com/automation-practice-form');
    }
  
    enterFirstName(name) {
      cy.get('#firstName').type(name);
    }
  
    enterLastName(name) {
      cy.get('#lastName').type(name);
    }
  
    enterEmail(email) {
      cy.get('#userEmail').type(email);
    }
  
    selectGender(gender) {
      cy.contains('label', gender).click();
    }
  
    enterMobile(number) {
      cy.get('#userNumber').clear().type(number);
    }
  
    selectDateOfBirth(day, month, year) {
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select').select(month);
      cy.get('.react-datepicker__year-select').select(year);
      cy.get(`.react-datepicker__day--0${day.padStart(2, '0')}:not(.react-datepicker__day--outside-month)`).click();
    }
  
    addSubject(subject) {
      cy.get('#subjectsInput').type(`${subject}{enter}`);
    }
  
    selectHobbies(hobbies) {
      hobbies.forEach(hobby => {
        cy.contains('label', hobby).click();
      });
    }
  
    uploadPicture(filename) {
      cy.get('#uploadPicture').selectFile(`cypress/fixtures/${filename}`);
    }
  
    enterAddress(address) {
      cy.get('#currentAddress').type(address);
    }
  
    selectStateAndCity(state, city) {
      cy.get('#state').click();
      cy.get('#state .css-26l3qy-menu, #state .css-11unzgr').contains(state).click();
      cy.get('#city').click();
      cy.get('#city .css-26l3qy-menu, #city .css-11unzgr').contains(city).click();
    }
  
    submit() {
      cy.get('#submit').then($btn => $btn[0].click());
    }
  
    verifySubmission() {
      cy.get('.modal-content').should('be.visible');
      cy.contains('Thanks for submitting the form');
    }
  
    verifyRequiredFields() {
      const fields = ['#firstName', '#lastName', '#userNumber'];
    
      fields.forEach(selector => {
        cy.get(selector)
          .should('have.css', 'border-color')
          .and('satisfy', color => color === 'rgb(220, 53, 69)');
      });
    }
  
    verifyInvalidEmail() {
      cy.get('#userEmail:invalid').should('exist');
    }
  
    verifyMobileValue(expected) {
      cy.get('#userNumber').should('have.value', expected);
    }
  
    verifyDateOfBirth(expectedDate) {
      cy.get('#dateOfBirthInput').should('have.value', expectedDate);
    }

    verifyLargeInputValues(expectedValue) {
      cy.get('#firstName').should('have.value', expectedValue);
    }

    verifyUIElements() {
      cy.get('#firstName').should('be.visible').and('be.enabled');
      cy.get('#lastName').should('be.visible').and('be.enabled');
      cy.get('#userEmail').should('be.visible').and('be.enabled');
      cy.get('#userNumber').should('be.visible').and('be.enabled');
      cy.get('#dateOfBirthInput').should('be.visible').and('be.enabled');
      cy.get('#subjectsInput').should('be.visible').and('be.enabled');
      cy.get('.custom-checkbox').should('have.length.at.least', 1).and('be.visible');
      cy.get('#uploadPicture').should('be.visible').and('be.enabled');
      cy.get('#currentAddress').should('be.visible').and('be.enabled');
      cy.get('#state').should('be.visible');
      cy.get('#city').should('be.visible');
      cy.get('#submit').should('be.visible').and('be.enabled');
    }
  }



  
  export default PracticeFormPage;
  