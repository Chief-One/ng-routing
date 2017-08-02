import { AppioPage } from './app.po';

describe('appio App', () => {
  let page: AppioPage;

  beforeEach(() => {
    page = new AppioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
