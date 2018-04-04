import { browser, element, by } from 'protractor';

export class HomeMoneyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ls-root h1')).getText();
  }
}
