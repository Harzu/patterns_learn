import {
  Target,
  TargetAdapter,
  DifferentTarget
} from './Reverse'

function run(target): void {
  try {
    const message = target.getMessage()
    console.log(message)
  } catch (error) {
    console.log('Not method getMessage in target instance')
  }
}

const target = new Target
run(target)

const different = new DifferentTarget
const differentMessage = different.getDifferentMessage()
console.log('Different message ', differentMessage)
run(different)

const adapter = new TargetAdapter(different)
run(adapter)