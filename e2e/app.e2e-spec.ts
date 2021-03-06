import { TreePage } from './app.po';
import { browser, ExpectedConditions as EC } from 'protractor';

describe('Tree App', () => {
  let page: TreePage;

  beforeEach(() => {
    page = new TreePage();
  });

  it('shoule have a tree where first node value is "Fonts"', () => {
    page.navigateTo();
    expect(page.getFirstNodeValueText()).toEqual('Fonts');
  });

  it('should load node children asynchronously', () => {
    page.navigateTo();

    page.getAsyncChildrenNodeFolding().click();

    const firstAsyncChild = page.getFirstAsyncChild();
    expect(browser.isElementPresent(firstAsyncChild)).toBe(true);
    expect(firstAsyncChild.getText()).toEqual('Input Mono');
    expect(page.getLastAsyncChild().getText()).toEqual('Source Code Pro');
  });
});
