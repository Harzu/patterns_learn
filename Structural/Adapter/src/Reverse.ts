import { ITarget, IDifferentTarget } from './inderfaces'

class Target implements ITarget {
  getMessage(): string {
    return 'My target message'
  }
}

class DifferentTarget implements IDifferentTarget {
  getDifferentMessage(): string {
    return 'egassem desreveR'
  }
}

class TargetAdapter implements ITarget {
  constructor(
    private adaptee: IDifferentTarget
  ) {}

  getMessage(): string {
    return this.adaptee.getDifferentMessage()
      .split('')
      .reverse()
      .join('')
  }
}

export {
  Target,
  TargetAdapter,
  DifferentTarget
}