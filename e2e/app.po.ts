export class FoursquarePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('foursquare-app h1')).getText();
  }
}
