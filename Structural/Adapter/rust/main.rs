mod reverse;
use reverse::*;

fn run(target_instance: Box<dyn TargetInterface>) {
  let inst: &dyn TargetInterface = &*target_instance;
  dbg!(inst.get_message());
}

fn main() {
  let targ = Box::new(Target::new());
  run(targ);

  let diff_targ = DifferentTarget::new();
  dbg!(diff_targ.get_different_message());

  let adapter = Box::new(TargetAdapter::new(diff_targ));
  run(adapter);
}