module.exports = class BasePage {

    constructor(browser, object) {}


  handleCatchedErrors(e) {
      console.log(e)
      if(e && e.stack) throw new Error(e.stack);
      else throw new Error(e);
  }



}
