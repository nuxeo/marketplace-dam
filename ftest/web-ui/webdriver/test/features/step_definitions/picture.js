'use strict';

module.exports = function () {
  this.Then('I can see the picture formats panel', () => {
    const page = this.ui.browser.documentPage(this.doc.type);
    page.waitForVisible();
    page.waitForVisible(`..//nuxeo-picture-formats`).should.be.true;
  });
};
