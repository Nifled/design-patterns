import { IObserver } from './IObserver'

export interface IObservable {
  registerObserver: (observer: IObserver) => void,
  removeObserver: (observer: IObserver) => void,
  notify: () => void
}
