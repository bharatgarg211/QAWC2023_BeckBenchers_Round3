import { test, expect } from '@playwright/test';

test('Movie Checked', async ({ page }) => {
  await page.goto('https://www.primevideo.com/');
  await page.getByRole('link', { name: 'Home' }).hover();
  await page.getByRole('link', { name: 'Movies' }).click();
  await page.pause();
  // Step 3: Print details of each slide
  const slideElements = await page.$$("standard-hero-card");
  for (const slide of slideElements) {
  const name =  await page.locator("//img[@class='_2Mrhyf u2YE+F KLNBWL']/@src").getByText;
  const availableOn =  await page.locator("//section[@class='DYBas- K8HVp6']//span[@class='_36qUej w1sRPC']").getByText;
  const suitableForAge =  await page.locator("//section[@class='DYBas- K8HVp6']//span[@class='G8xF_x R1vcpH']").getByText;
  console.log(`Name: ${name} | Available on: ${availableOn} | Suitable for Age: ${suitableForAge}`);


  // Step 5: Search for a movie by name captured in step 3
  await page.fill("#pv-search-nav", "movie name");
  await page.press("#pv-search-nav", "Enter");
  }


  // Step 6: Verify first result contains same name
  const firstResultName = await page.$eval("//article[@class='Z9dd1d']//a)[1]", (el) => el.textContent);
  console.log(`First result name: ${firstResultName}`);
  

 // Step 7: Click on first link
 await page.click("//article[@class='Z9dd1d']//a)[1]");
  

// Step 8 - Click on the trailer icon and verify video play
const trailerIcon = await page.$("//div[@data-automation-id='trailer-button'] - trailerIcon");
await trailerIcon?.click();
await page.waitForSelector(".av-video-container video");
const videoPlayer  = Array.arguments(await page.$(".av-video-container video") as HTMLCollection<HTMLAllCollection>);
const isVideoPlaying = await videoPlayer?.isPlaying();
if (!isVideoPlaying) {
  console.log("Video is not playing");
}

 // Step 9 - Verify video scenarios
 await videoPlayer?.pause();
 await videoPlayer?.seek(10000);
 const currentTime = await videoPlayer?.currentTime();
 if (Math.abs(currentTime - 10) > 1) {
   console.log(`Incorrect current time: ${currentTime}`);
 }

 let totalTime = await videoPlayer?.duration();
 let isForwarding = true;
 while (isForwarding) {
   const beforeTime = await videoPlayer?.currentTime();
   await page.click(".av-forward-button");
   const afterTime = await videoPlayer?.currentTime();
   if (afterTime > totalTime) {
     isForwarding = false;
   }
   if (beforeTime >= afterTime) {
     console.log(`Incorrect time after forwarding: ${afterTime}`);
   }
 }

 let isRewinding = true;
 while (isRewinding) {
   const beforeTime = await videoPlayer?.currentTime();
   await page.click;

//point number 10

await page.locator("//button[@aria-label='Close Player']").click();
await page.locator("//img[@alt='Prime Video']").click();

 //point number 11
await page.locator("//*[starts-with(text(), 'Your favorite channels all in one place')]").click();

//point number 12

expect(await page.screenshot()).toMatchSnapshot('/test-results/images/Discovery.jpg');
 expect(await page.screenshot()).toMatchSnapshot('/test-results/images/Erosnow.jpg');
 expect(await page.screenshot()).toMatchSnapshot('/test-results/images/LionsgatePlay.jpg');

}
}
);



