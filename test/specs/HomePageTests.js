import Homepage from '../pageobjects/HomePage';
describe('Home Page', function() {

  let homePage = new Homepage(browser);

  it('Should Have English Heading', async () =>  {
    await browser.url('http://quran.com');
    let text = await homePage.getLandingText();
    expect(text).to.equal(`THE NOBLE QUR'AN`);
  });

  it('Should have 114 surahs', async () => {
    let numberSurahs = await homePage.getNumberOfSurahs();
    expect(numberSurahs).to.equal(114);
  })

});
