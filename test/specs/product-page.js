var ProductPageObject = require('../pageobjects/ProductPage');
describe('Product Page', function() {
  let productPage = new ProductPageObject(browser)
  let pageObject = productPage.getPageObject();

/*
  it('Should contain designer name and product name', async (done) =>  {
    browser.timeoutsImplicitWait(1000);

    await browser.url('/en-GB/product/585102?ppv=2');
    //await productPage.shouldBeOnMrPorter();
    await productPage.shouldHaveDesignerName('THOM')
    done();
  });


  it('Mutliple outfits & interactions', async (done) => {
    const multipleOutfitElement = pageObject.mutlipleOutFot;

    await browser.waitForExist(multipleOutfitElement, 1000);
    let multipleOutfit =  await browser.isExisting(multipleOutfitElement);
    expect(multipleOutfit).toBe(true);

    await browser.scroll(multipleOutfitElement)
    await browser.click('.product-multipleOutFit__tab--two');

    var label = await browser.getText('.product-image__lookLabel');
    expect(label).toBe('LOOK TWO');

    var editorsNoteLookTwo = await browser.getAttribute('.editors-notes-outfits__item--two', 'class');
    expect(editorsNoteLookTwo[0]).toContain('editors-notes-outfits__item--active')

    done();

  });

  it('Error Path - ADD TO BAG', async (done) =>  {

    try {
      await browser.click(pageObject.addToBagButton);
      let validationMsg =  await browser.isExisting('.validation-msg');
      expect(validationMsg).toBe(true);

      var validationMsgText= await browser.getText('.validation-msg');
      expect(validationMsgText).toBe('Please select a size');
      await browser.saveScreenshot('error_path.png');

    } catch(e) {console.log(e)}

    done();
  });

  it('Success Path - ADD TO BAG', async (done) =>  {

    productPage.addToBag()

    // await browser.waitForText('.count', 2000)
    // var basketCount = await browser.getText('.shopping-bag .count');
    // expect(basketCount).toBe('1');

    done();
  });
*/



});
