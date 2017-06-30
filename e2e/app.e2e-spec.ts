import { HivefighPage } from './app.po';

describe('hivefigh App', () => {
  let page: HivefighPage;

  beforeEach(() => {
    page = new HivefighPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to hifi!!');
  });
});
