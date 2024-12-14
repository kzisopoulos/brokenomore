import { Injector, runInInjectionContext, StaticProvider } from '@angular/core';

export const runFnInContext = <ReturnType>(
  providers: StaticProvider[],
  fn: () => ReturnType,
): ReturnType => runInInjectionContext(Injector.create({ providers }), fn);
