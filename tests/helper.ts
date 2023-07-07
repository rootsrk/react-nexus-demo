import { test as base } from "@playwright/test";
import { NexusHomePage } from "./page-objects/NexusHomePage";

export const nexusTest = base.extend<{
  nexusHomePage: NexusHomePage;
}>({
  nexusHomePage: async ({ page }, use) => {
    const nexusHomePage = new NexusHomePage(page);
    await nexusHomePage.load();
    await use(nexusHomePage);
  },
});
