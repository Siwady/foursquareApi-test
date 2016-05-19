import { FoursquarePage } from './app.po';

describe('foursquare App', function() {
  let page: FoursquarePage;

  beforeEach(() => {
    page = new FoursquarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('foursquare works!');
  });
});
