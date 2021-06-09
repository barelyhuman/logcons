import { blue, green, yellow, red, white } from 'kleur'

function iconBuilder (icon, defaultColor) {
  return (fn) => {
    if (fn && typeof fn === 'function') {
      return fn(icon)
    }
    return defaultColor(icon)
  }
}

export const logcons = {
  tick: iconBuilder('✔', green().bold),
  info: iconBuilder('ℹ', blue().bold),
  warn: iconBuilder('⚠', yellow().bold),
  cross: iconBuilder('✖', red().bold),
  radioactive: iconBuilder('☢', yellow().bold),
  yinyang: iconBuilder('☯', white().bold),
  lightning: iconBuilder('⚡', yellow().bold),
  wheelOfDharma: iconBuilder('☸', white().bold),
  peace: iconBuilder('☮', white().bold),
  biohazard: iconBuilder('☣', yellow().bold),
  heart: iconBuilder('♥', red().bold)
}
