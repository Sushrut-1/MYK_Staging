import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Enquiry form with unique data (POM)', async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto('https://myklaticrete.wpstaging.amura.in/');
  await homePage.openEnquiryForm();
  await homePage.fillEnquiryFormWithUniqueData();
  await homePage.validateCaptchaPresence();

  // Submit is skipped because CAPTCHA cannot be automated
});
