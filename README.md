# React Bootstrap Icons

> Currently v1.7.1, over **1500 icons!**

120 new icons
This update was a lot of fun for me—drawing all these tiny computer parts most of all! There are dozens of new computer-related icons for parts, ports, and peripheral devices. There are also several new brand icons, including Meta, and some other fun icons like a new robot head and a boombox.

New icons in v1.7.0
<img src="https://blog.getbootstrap.com/assets/img/2021/11/icons-v170.png">

## Installation

```bash
npm install react-bootstrap-icons --save
```

or

```bash
yarn add react-bootstrap-icons
```

Then replace react-bootstrap-icons version in your package.json 
 ```
 "react-bootstrap-icons": "https://github.com/vnellin/react-bootstrap-icons.git",
 ```

## Usage

```jsx
import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

export default function App() {
  return <ArrowRight />;
}
```

Icons can be configured with inline props:

```jsx
<ArrowRight color="royalblue" size={96} />
```

You can pass wathever props you want:

```jsx
<ArrowRight className="ml-4" />
```

You can also include the whole icon pack:

```jsx
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function App() => {
  return <Icon.ArrowRight />
};
```

## Figma Plugin

You can install it from Figma app: [Bootstrap Icons Plugin for Figma](https://www.figma.com/community/plugin/868341386266170307/Bootstrap-Icons)

## More options

Other ways to use Boostrap icons: [https://icons.getbootstrap.com/#usage](https://icons.getbootstrap.com/#usage)

## License

- react-bootstrap-icons are open sourced ([MIT](https://github.com/ismamz/react-bootstrap-icons/blob/master/LICENSE.md))
- Bootstrap Icons are open sourced ([MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)).

## Collaborators

- [@kwnath](https://github.com/kwnath)
