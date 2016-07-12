module.exports = function(){

  this.Given(/^I am on the homepage"$/, asyc function(url) {
    await browser.url(url);
  });

};
