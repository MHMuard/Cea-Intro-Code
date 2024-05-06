import puppeteer from "puppeteer";
import {setTimeout} from "timers/promises";

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
});

const page = await browser.newPage();
await page.goto("https://duckduckgo.com/", {
    waitUntil: "networkidle2",
    timeout: 60000,
});

await page.waitForSelector('[class="searchbox_input__bEGm3"]');
await page.type('[class="searchbox_input__bEGm3"]', 'Mosaddek habib murad github');
await page.click('[class="searchbox_searchButton__F5Bwq iconButton_button__6x_9C"]');
await page.waitForSelector('[data-testid="result-title-a"]');
await page.click('[data-testid="result-title-a"]');
await page.waitForSelector('[data-selected-links="repositories /MHMuard?tab=repositories"]');
await page.click('[data-selected-links="repositories /MHMuard?tab=repositories"]');
await page.waitForSelector('[itemprop="name codeRepository"]');
await page.click('[itemprop="name codeRepository"]');
await page.waitForSelector('[title="README.md"]');
// Take a screenshot
await page.screenshot({ path: 'github.png' });

await setTimeout(1000)

await browser.close();

