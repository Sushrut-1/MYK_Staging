import { expect } from '@playwright/test';
import { getUniqueUser } from '../utils/testdata';

class HomePage {
  constructor(page) {
    this.page = page;

    this.enquiryNowBtn = page.locator("//div[@class='enquire-now-section']//a[text()='Enquire Now']");
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("//input[@name='email' and @placeholder='Email*']");
    this.phoneInput = page.locator("#Contact");
    this.cityInput = page.locator("#city-name");
    this.occupationDropdown = page.locator("#Occupation");
    this.messageTextarea = page.locator("textarea[name='message']");
    this.submitBtn = page.locator("input[value='Submit']");
  }

  async openEnquiryForm() {
    await expect(this.enquiryNowBtn).toBeVisible();
    await this.enquiryNowBtn.click();
  }

  async fillEnquiryFormWithUniqueData() {
    const user = getUniqueUser();

    await expect(this.nameInput).toBeVisible();
    await this.nameInput.fill(user.name);
    await this.emailInput.fill(user.email);
    await this.phoneInput.fill(user.mobile);
    await this.cityInput.fill(user.city);
    await this.occupationDropdown.selectOption({ index: 1 });
    await this.messageTextarea.fill(user.message);

    console.log('Test Data:', user);
  }

  async validateCaptchaPresence() {
    await expect(
      this.page.frameLocator("iframe[src*='recaptcha']")
    ).toBeTruthy();
  }
}

export { HomePage };
