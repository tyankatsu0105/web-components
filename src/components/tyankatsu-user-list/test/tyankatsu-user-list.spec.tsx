import { newSpecPage } from '@stencil/core/testing';
import { TyankatsuUserList } from '../tyankatsu-user-list';

describe('tyankatsu-user-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TyankatsuUserList],
      html: `<tyankatsu-user-list></tyankatsu-user-list>`,
    });
    expect(page.root).toEqualHtml(`
      <tyankatsu-user-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tyankatsu-user-list>
    `);
  });
});
