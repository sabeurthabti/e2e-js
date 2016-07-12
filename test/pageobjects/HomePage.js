var BasePage = require('./BasePage');
module.exports = class ListingPage extends BasePage {

  constructor(browser) {

    let selectors = {
      LANDING_TEXT: 'h4.title',
      NEXT: 'a[data-direction="next"]',
      PREVIOUS: 'a[data-direction="previous"]'

    }

    super(browser, selectors)
    this.browser = browser;
    this.selectors = selectors
  }



  async getLandingText() {
    var landingText = await this.browser.getText(this.selectors.LANDING_TEXT);
    return landingText;
  }


}
