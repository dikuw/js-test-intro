const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('output name and age', () => {
  const text = generateText('Ashley', 19);
  expect(text).toBe('Ashley (19 years old)');
});

test('handle empty string', () => {
  const text = generateText('', 19);
  expect(text).toBe(' (19 years old)');
});

test('handle null', () => {
  const text = generateText('Ashley', null);
  expect(text).toBe('Ashley (null years old)');
});

test('generate a valid text output', () => {
  const text = checkAndGenerate('Sara', 15);
  expect(text).toBe('Sara (15 years old)');
})

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ['--window-size=1920,1080']
  })
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.click('input#name');
  await page.type('input#name','Sam');
  await page.click('input#age');
  await page.type('input#age','12');
  await page.click('#btnAddUser');
  const text = await page.$eval('.user-item', el => el.textContent);
  expect(text).toBe('Sam (12 years old)');
}, 10000)