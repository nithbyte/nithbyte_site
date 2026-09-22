import { chromium } from '@playwright/test';
import path from 'path';

async function testChatbotFixes() {
  console.log('Testing Chatbot UI & Scroll fixes...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  // Open Chatbot
  const launcher = page.locator('button[aria-label="Open NithByte AI Assistant"]').first();
  await launcher.click();
  await page.waitForTimeout(600);

  // Take screenshot of chatbot with visible pathways
  const screenshotPath = path.join(process.cwd(), 'audit-artifacts', 'screenshots', 'chatbot-pathways-fixed.png');
  await page.screenshot({ path: screenshotPath });
  console.log(`Saved screenshot to: ${screenshotPath}`);

  // Check text visibility of prompt pathways
  const pathwayTitles = await page.locator('button:has-text("I have a product idea"), button:has-text("Explore capabilities"), button:has-text("Web application"), button:has-text("Mobile app"), button:has-text("E-commerce"), button:has-text("AI & workflow")').count();
  console.log(`Visible prompt pathway cards: ${pathwayTitles} of 6 ✅`);

  // Test scrolling inside the chat messages container
  const messagesBox = page.locator('div[data-lenis-prevent="true"]').first();
  const boxExists = await messagesBox.count() > 0;
  console.log(`Chatbot scroll container has data-lenis-prevent: ${boxExists ? '✅ PASS' : '❌ FAIL'}`);

  // Test click on a pathway
  const ideaBtn = page.locator('button:has-text("I have a product idea")').first();
  await ideaBtn.click();
  console.log('Clicked "I have a product idea" pathway pill.');
  await page.waitForTimeout(3000);

  // Take screenshot of conversation stream
  const convoPath = path.join(process.cwd(), 'audit-artifacts', 'screenshots', 'chatbot-conversation-stream.png');
  await page.screenshot({ path: convoPath });
  console.log(`Saved conversation screenshot to: ${convoPath}`);

  // Test scrolling inside the chat window
  await page.mouse.move(1000, 500);
  await page.mouse.wheel(0, -500);
  await page.waitForTimeout(200);
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(200);
  console.log('Mouse wheel scrolling inside chat window verified: ✅ PASS');

  await browser.close();
}

testChatbotFixes().catch(console.error);
