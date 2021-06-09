type ColorHandler = (icon: string) => string;
type IconHandler = (fn: ColorHandler) => string;

export declare const logcons: {
  tick: IconHandler;
  info: IconHandler;
  warn: IconHandler;
  cross: IconHandler;
  radioactive: IconHandler;
  yinyang: IconHandler;
  lightning: IconHandler;
  wheelOfDharma: IconHandler;
  peace: IconHandler;
  biohazard: IconHandler;
  heart: IconHandler;
};
