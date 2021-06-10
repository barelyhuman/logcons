# logcons

Simple and customizable unicode symbols for the terminal

## Features

- Small , has like one dependency
- You can customize the colors if you wish to

**_the catch_**

- Doesn't compile to esm right now (waiting for [wrap](https://github.com/barelyhuman/wrap) to add support)

## Install

```sh
$ npm install logcons
```

### Usage

```js
const { white } = require("kleur");

console.log(logcons.peace());
console.log(logcons.biohazard());

console.log("===Custom Coloured===");

console.log(
  `Original: ${logcons.heart()} Custom: ${logcons.heart(white().bold)}`
);

console.log(
  `Original: ${logcons.cross()} Custom: ${logcons.cross((icon) => icon)}`
);
```

### API

Check the [index.d.ts](index.d.ts) for the available icons

## Contribute

- PR's are welcome
- Make sure you add the added unicode symbols to the TS file and the example as well

## License

[MIT](LICENSE)
