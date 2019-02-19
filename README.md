# click-outside-hook

A simple react hook to detect click or touch events outside an element and execute a provided callback when this happens.

[![NPM](https://img.shields.io/npm/v/click-outside-hook.svg)](https://www.npmjs.com/package/click-outside-hook)
[![CircleCI](https://circleci.com/gh/andreoav/click-outside-hook/tree/master.svg?style=svg)](https://circleci.com/gh/andreoav/click-outside-hook/tree/master)

## Install

```bash
yarn add click-outside-hook
```

## Usage

```tsx
import * as React from 'react';
import useClickOutside from 'click-outside-hook';

export default function SomeAwesomeComponent() {
  const ref = useClickOutside(() => console.log('my callback'));

  return (
    <div>
      <div ref={ref}>Awesome content</div>
    </div>
  );
}
```

When the user clicks or touches outside the `Awesome content` element, the callback is executed.

## License

MIT © [andreoav](https://github.com/andreoav)
