import { FashionMapPage } from './app.po';

describe('fashion-map App', function() {
  let page: FashionMapPage;

  beforeEach(() => {
    page = new FashionMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
