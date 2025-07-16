const { practice } = require('../pageObjects/practicePage');

const Practice = new practice();

describe('DemoQA Automation Practice Form', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Should be visible logo after downloading page', () => {
        Practice.logoImg().should('be.visible');
    })
  
    // it('Positive test: Fill and submit form successfully', () => {
    //   // First & Last Name
    //   cy.get('#firstName').type('John');
    //   cy.get('#lastName').type('Doe');
  
    //   // Email
    //   cy.get('#userEmail').type('john.doe@example.com');
  
    //   // Gender
    //   cy.get('label[for="gender-radio-1"]').click();
  
    //   // Mobile Number
    //   cy.get('#userNumber').type('1234567890');
  
    //   // Date of Birth
    //   cy.get('#dateOfBirthInput').click();
    //   cy.get('.react-datepicker__month-select').select('May');
    //   cy.get('.react-datepicker__year-select').select('1995');
    //   cy.get('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click();
  
    //   // Subjects
    //   cy.get('#subjectsInput').type('Maths{enter}');
  
    //   // Hobbies
    //   cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    //   cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading
  
    //   // Picture Upload
    //   cy.get('#uploadPicture').selectFile('cypress/fixtures/test-image.jpg');
  
    //   // Current Address
    //   cy.get('#currentAddress').type('123 Main Street');
  
    //   // State & City
    //   cy.get('#state').click().get('#react-select-3-option-0').click();
    //   cy.get('#city').click().get('#react-select-4-option-0').click();
  
    //   // Submit with JS to avoid footer obstruction
    //   cy.get('#submit').then($btn => {
    //     $btn[0].click();
    //   });
  
    //   // Modal should be visible
    //   cy.get('.modal-content').should('be.visible');
    //   cy.contains('Thanks for submitting the form');
    // });
  
    // it('Negative test: Submit with empty required fields', () => {
    //   cy.get('#submit').click();
      
    //   // Expect required fields to show validation styling
    //   cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    //   cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    //   cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    //   cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    // });
  
    // it('Invalid email validation', () => {
    //   cy.get('#userEmail').type('invalid-email');
    //   cy.get('#userEmail:invalid').should('exist');
    // });
  
    // it('Mobile field rejects non-numeric characters', () => {
    //   cy.get('#userNumber').type('abc123!@#');
    //   cy.get('#userNumber').should('have.value', '123');
    // });
  
    // it('Date of Birth: Selecting date via picker', () => {
    //   cy.get('#dateOfBirthInput').click();
    //   cy.get('.react-datepicker__month-select').select('June');
    //   cy.get('.react-datepicker__year-select').select('1990');
    //   cy.get('.react-datepicker__day--010:not(.react-datepicker__day--outside-month)').click();
    //   cy.get('#dateOfBirthInput').should('have.value', '10 Jun 1990');
    // });
  });
