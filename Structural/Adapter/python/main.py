from Reverse import Target, TargetAdapter, DifferentTarget

def run(target):
  try:
    print(target.getMessage())
  except AttributeError:
    print('Method getMessage is not define at target')  
  pass

target = Target()
run(target)

difTarget = DifferentTarget()
difMessage = difTarget.getDifferentMessage()
print(difMessage)
run(difTarget)

adapter = TargetAdapter(difTarget)
run(adapter)