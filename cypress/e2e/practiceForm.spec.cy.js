import PracticeFormPage from '../pageObjects/practiceFormPage';
import userData from '../fixtures/userData.json';

describe('DemoQA Practice Form checking', () => {
  const formPage = new PracticeFormPage();

  beforeEach(() => {
    formPage.visit();
  });

  it('Positive test: Fill and submit form successfully', () => {
    formPage.enterFirstName(userData.firstName);
    formPage.enterLastName(userData.lastName);
    formPage.enterEmail(userData.email);
    formPage.selectGender(userData.gender);
    formPage.enterMobile(userData.mobile);
    formPage.selectDateOfBirth(userData.dob.day, userData.dob.month, userData.dob.year);
    formPage.addSubject(userData.subject);
    formPage.selectHobbies(userData.hobbies);
    formPage.uploadPicture(userData.picture);
    formPage.enterAddress(userData.address);
    formPage.selectStateAndCity(userData.state, userData.city);
    formPage.submit();
    formPage.verifySubmission();
  });

  it('Negative test: Submit with empty required fields and checking border color', () => {
    formPage.submit();
    formPage.verifyRequiredFields();
  });

  it('Invalid email validation', () => {
    formPage.enterEmail(userData.invalidEmail);
    formPage.verifyInvalidEmail();
  });

  it('Mobile field rejects non-numeric characters', () => {
    formPage.enterMobile(userData.invalidMobile);
    formPage.verifyMobileValue(userData.invalidMobile);
  });

  it('Date of Birth: Selecting date via picker', () => {
    formPage.selectDateOfBirth(userData.verifyDob.day, userData.verifyDob.month, userData.verifyDob.year);
    formPage.verifyDateOfBirth(userData.verifyDob.expectedDisplay);
  });

  it('Simple large input check without submitting', () => {
    const longString = 'A'.repeat(1000);
  
    formPage.enterFirstName(longString);
    formPage.verifyLargeInputValues(longString)
  });

  it('Verify all UI elements are visible and enabled', () => {
    formPage.verifyUIElements();
  });
  
});
 
