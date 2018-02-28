import { AngularShopPage } from './app.po';

describe('angular-shop App', () => {
  let page: AngularShopPage;

  beforeEach(() => {
    page = new AngularShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
