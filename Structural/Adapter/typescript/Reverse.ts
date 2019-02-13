import { TargetInterface, DifferentTargetInterface } from './inderfaces'

class Target implements TargetInterface {
  getMessage(): string {
    return 'My target message'
  }
}

class DifferentTarget implements DifferentTargetInterface {
  getDifferentMessage(): string {
    return 'egassem desreveR'
  }
}

class TargetAdapter implements TargetInterface {
  private adaptee: DifferentTargetInterface

  constructor(adapteeClass: DifferentTargetInterface) {
    this.adaptee = adapteeClass
  }

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