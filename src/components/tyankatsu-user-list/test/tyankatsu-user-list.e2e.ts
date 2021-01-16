import { newE2EPage } from '@stencil/core/testing';

describe('tyankatsu-user-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tyankatsu-user-list></tyankatsu-user-list>');

    const element = await page.find('tyankatsu-user-list');
    expect(element).toHaveClass('hydrated');
  });
});
