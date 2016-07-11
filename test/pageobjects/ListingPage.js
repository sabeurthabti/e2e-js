var BasePage = require('./BasePage');
module.exports = class ListingPage extends BasePage {
    constructor(browser) {

        let selectors = {
            LANDING_TEXT: 'h1.pl-content__title',
            NEXT: 'a[data-direction="next"]',
            PREVIOUS: 'a[data-direction="previous"]',
            PAGE_NUMBER: 'li.pl-pagination__item--number span:nth-child(2)'

        }

        super(browser, selectors)
        this.browser = browser;
        this.selectors = selectors
    }


    async getLandingText() {
        try {
            var landingText = await this.browser.getText(this.selectors.LANDING_TEXT);
            console.log(landingText);
        } catch(e) {
            console.log('error in getLandingText')
            console.log(e)
        }
    }

    async getPageNumber() {
        try {
            var pageNumber = await this.browser.getText(this.selectors.PAGE_NUMBER);
            return pageNumber;
        } catch(e) {
            this.handleCatchedErrors(e)
        }
    }

}
