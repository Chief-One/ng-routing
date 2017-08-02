import { appPage } from './app.po';

describe('app App', () => {
  let page: appPage;

  beforeEach(() => {
    page = new appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
