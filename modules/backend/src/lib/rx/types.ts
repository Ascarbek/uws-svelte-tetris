import type { PromiseOrValue, Unsubscribe } from './common.js';

export type IListener<T = void> = (event: T) => PromiseOrValue<void>;

export interface IObservable<T = void> {
  subscribe(listener: IListener<T>): Unsubscribe;
}

export interface IEmitter<T = void> {
  emit(event: T): PromiseOrValue<void>;
}

export interface ISubject<T = void> extends IObservable<T>, IEmitter<T> {}

export interface IEventEmitter {
  on(name: string, listener: IListener<any>): Unsubscribe;
  emit(name: string, event: any): void;
}
