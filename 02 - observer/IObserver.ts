/**
 * id is just so we can have a proper reference to each 
 * observer for collection logic (add, remove, etc)
 */
export interface IObserver {
  // on notified
  update: () => void,
  id: number
}
