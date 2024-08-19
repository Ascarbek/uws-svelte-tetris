import type { IListener, ISubject } from './types.js';
import type { Unsubscribe } from './common.js';

export class Subject<T = void> implements ISubject<T> {
  private _listeners = new Map<object, (event: T) => any>();

  subscribe(listener: IListener<T>): Unsubscribe {
    const id = {};
    this._listeners.set(id, listener);
    return () => {
      this._listeners.delete(id);
    };
  }

  emit(event: T): void {
    let promises: (PromiseLike<void> | void)[] = [];
    this._listeners.forEach((listener: (params: T) => void | PromiseLike<void>) => {
      const promiseOrValue = listener(event);

      promises.push(promiseOrValue);
    });
    Promise.all(promises).then(() => {});
  }
}
