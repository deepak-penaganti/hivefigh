import { browser, by, element } from 'protractor';

export class HivefighPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hifi-root h1')).getText();
  }
}
