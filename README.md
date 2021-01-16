# Web Components

[![npm version](https://badge.fury.io/js/%40tyankatsu0105%2Fweb-components.svg)](https://badge.fury.io/js/%40tyankatsu0105%2Fweb-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

My sample of Web Components with [Stencil](https://stenciljs.com/)

# Usage

```bash
npm install @tyankatsu0105/web-components
```

## React

```tsx
import * as React from 'react';
export const Component = () => <tyankatsu-user user='{"name": "john", "age": 20, "blood": "A"}'></tyankatsu-user>;

// or

import * as React from 'react';
import { Components } from '@tyankatsu0105/web-components';

type Props = Components.TyankatsuUser;

export const Component = (props: Props) => React.createElement('tyankatsu-user', { user: JSON.stringify(props.user) });
```

### Tips

You will probably be annoyed by type error like below:

```bash
Property 'tyankatsu-user' does not exist on type 'JSX.IntrinsicElements'
```

So, you should add this:  
`web-components.d.ts`

```ts
import { JSX as JSX1 } from '@tyankatsu0105/web-components';
import { HTMLAttributes } from 'react';

type ToHTMLAttribute = Omit<HTMLAttributes<Element>, 'className'> & {
  class?: HTMLAttributes<Element>['className'];
};

type ToReact<ElementMap> = {
  [K in keyof ElementMap]?: ElementMap[K] & ToHTMLAttribute;
};

declare global {
  export namespace JSX {
    interface IntrinsicElements extends ToReact<JSX1.IntrinsicElements> {}
  }
}
```

## html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <tyankatsu-user user='{"name": "john", "age": 20, "blood": "A"}'></tyankatsu-user>

    <script type="module" src="https://unpkg.com/@tyankatsu0105/web-components"></script>
  </body>
</html>
```

# Development

```bash
npm run start
```

## Storybook

```bash
npm run build
npm run storybook
```

`build-storybook` script is used by Vercel's deploy.

# LICENSE

MIT
