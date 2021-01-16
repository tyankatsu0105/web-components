import { newE2EPage } from '@stencil/core/testing';

describe('tyankatsu-user', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tyankatsu-user></tyankatsu-user>');

    const element = await page.find('tyankatsu-user');
    expect(element).toHaveClass('hydrated');
  });
});
