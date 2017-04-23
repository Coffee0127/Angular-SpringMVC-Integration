import { SampleProjectPage } from './app.po';

describe('sample-project App', () => {
  let page: SampleProjectPage;

  beforeEach(() => {
    page = new SampleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
