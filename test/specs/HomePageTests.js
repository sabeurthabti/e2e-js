import Homepage from '../pageobjects/HomePage';
describe('Home Page', function() {

  let homePage = new Homepage(browser);

  it('Should Have English Heading', () =>  {
    browser.url('http://quran.com');
    let text = homePage.getLandingText();
    expect(text).to.equal(`THE NOBLE QUR'AN`);
  });

  it('Should have 114 surahs', () => {
    let numberSurahs = homePage.getNumberOfSurahs();
    expect(numberSurahs).to.equal(114);
  })

});
