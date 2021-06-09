# logcons

Simple and customizable unicode symbols for the terminal

## Features

- Small , has like one dependency
- Available as both cjs, esm (might be unstable)
- You can customize the colors if you wish to

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

## Contribute

- PR's are welcome
- Make sure you add the added unicode symbols to the TS file and the example as well

## License

[MIT](LICENSE)
