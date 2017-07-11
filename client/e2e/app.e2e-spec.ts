import { MeanSeedPage } from './app.po';

describe('mean-seed App', () => {
  let page: MeanSeedPage;

  beforeEach(() => {
    page = new MeanSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
