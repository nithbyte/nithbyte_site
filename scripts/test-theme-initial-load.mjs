import { chromium } from '@playwright/test';

async function testInitialTheme() {
  console.log('Testing initial theme load on fresh session...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  // Load and clear localStorage
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    localStorage.clear();
  });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const isDarkInitial = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log(`Initial HTML has 'dark' class: ${isDarkInitial} (${!isDarkInitial ? '✅ PASS - Light Theme is default' : '❌ FAIL'})`);

  const initialThemeState = await page.evaluate(() => localStorage.getItem('nithbyte-theme'));
  console.log(`Initial localStorage nithbyte-theme: ${initialThemeState || '(unset, defaulted to light)'}`);

  // Find the visible desktop toggle button
  const toggleBtn = page.locator('button[aria-label*="Switch to"]:visible').first();
  const labelBefore = await toggleBtn.getAttribute('aria-label');
  console.log(`Visible Toggle Button aria-label: "${labelBefore}"`);

  await toggleBtn.click();
  await page.waitForTimeout(500);

  const isDarkAfterToggle = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  const savedThemeAfterToggle = await page.evaluate(() => localStorage.getItem('nithbyte-theme'));
  console.log(`After clicking Theme Toggle: 'dark' class = ${isDarkAfterToggle}, saved = ${savedThemeAfterToggle} (${isDarkAfterToggle ? '✅ PASS - Successfully toggled to Dark' : '❌ FAIL'})`);

  // Take screenshot of Dark Theme
  await page.screenshot({ path: 'audit-artifacts/screenshots/theme-dark-toggled.png' });

  // Toggle back to Light
  await toggleBtn.click();
  await page.waitForTimeout(500);
  const isDarkBack = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log(`After clicking Theme Toggle again: 'dark' class = ${isDarkBack} (${!isDarkBack ? '✅ PASS - Toggled back to Light' : '❌ FAIL'})`);

  // Take screenshot of Light Theme
  await page.screenshot({ path: 'audit-artifacts/screenshots/theme-light-initial.png' });

  await browser.close();
}

testInitialTheme().catch(console.error);
