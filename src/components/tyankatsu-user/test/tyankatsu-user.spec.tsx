import { newSpecPage } from '@stencil/core/testing';
import { TyankatsuUser } from '../tyankatsu-user';

describe('tyankatsu-user', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TyankatsuUser],
      html: `<tyankatsu-user></tyankatsu-user>`,
    });
    expect(page.root).toEqualHtml(`
      <tyankatsu-user>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tyankatsu-user>
    `);
  });
});
