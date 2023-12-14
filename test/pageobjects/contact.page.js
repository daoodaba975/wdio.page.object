import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {
  /**
   * define selectors using getter methods
   */
  get contact() {
    return $('(//a//span[contains(text(),"Contact")])[2]');
  }

  get envoyer() {
    return $('//a[contains(text(),"Envoyer")]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async verifierBoutonContact(contact) {
    await this.contact.isDisplayed();
  }

  async accesPageContact(contact) {
    await this.contact.click();
  }

  async verifierBoutonEnvoyer(envoyer) {
    await this.envoyer.isDisplayed();
  }

  async envoyerMessageContact(envoyer) {
    await this.envoyer.click();
  }

  async attendre(seconde) {
    await browser.pause(seconde * 1000);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("contact");
  }
}

export default new ContactPage();
