import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://reactnexus.com/");
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Venue" }).click();
  await page.getByText("Radisson Blu Hotel, Bengaluru Outer Ring Road").click();
  await page.getByRole("link", { name: "Speakers" }).first().click();
  await page
    .getByRole("heading", { name: "Our Speakers" })
    .getByText("Speakers")
    .click();
});
