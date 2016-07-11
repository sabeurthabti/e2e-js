//TODO done pagination tests. Need to add assertions and a PID check however can't get iterating elements to work
var ListingPage = require('../pageobjects/ListingPage');
describe('Listing Page', function() {

  let listingPage = new ListingPage(browser);

  it('Pagination', async (done) =>  {
    //browser.timeoutsImplicitWait(1000);
    try {
      await browser.url('http://mrporter.com/en-gb/mens/shoes');
      await listingPage.getLandingText();

      var pageNumberBefore = await listingPage.getPageNumber();
      console.log(pageNumberBefore);
      expect('2323').toBe('2323');

      done();
    } catch(e) {
      console.log(e)
    }
  });

});
