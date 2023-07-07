import { Page, expect } from "@playwright/test";

export class NexusHomePage {
  loginAsValidUser() {
    throw new Error("Method not implemented.");
  }
  expectTicketingToWorkAsExpected() {
    throw new Error("Method not implemented.");
  }
  constructor(private readonly page: Page) {}

  async load() {
    // /
    await this.page.goto("https://reactnexus.com/");
  }

  async expectNavigationToWorkAsExpected() {
    await this.page.getByText("React Nexus", { exact: true }).click();
    await expect(this.page.getByText("July 07 - 08, 2023")).toBeVisible();
    await expect(
      this.page.getByText("Radisson Blu Hotel, Bengaluru Outer Ring Road")
    ).toBeVisible();
    await this.page.getByRole("link", { name: "Speakers" }).first().click();
    await expect(
      this.page.getByRole("heading", { name: "Our Speakers" })
    ).toBeVisible();

    await this.page.getByRole("link", { name: "Sponsors" }).click();
    await expect(
      this.page.getByRole("heading", { name: "The Sponsors" })
    ).toBeVisible();

    await this.page.getByRole("link", { name: "Organizers" }).first().click();
    await expect(
      this.page.getByRole("heading", { name: "The Organizers" })
    ).toBeVisible();
  }
}
