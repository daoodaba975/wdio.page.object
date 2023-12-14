import { expect } from "@wdio/globals";
import ContactPage from "../pageobjects/contact.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await ContactPage.attendre(2);
    await ContactPage.open();

    await ContactPage.attendre(2);
    await ContactPage.accesPageContact(contact);

    await ContactPage.attendre(2);
    await ContactPage.envoyerMessageContact(envoyer);

    await ContactPage.attendre(2);
  });
});
