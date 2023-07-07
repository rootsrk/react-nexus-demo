import { nexusTest } from "./helper";

nexusTest(
  "Expect top navigation works as expected",
  async ({ nexusHomePage }) => {
    await nexusHomePage.expectNavigationToWorkAsExpected();
  }
);
