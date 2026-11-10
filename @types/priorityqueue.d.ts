// `priorityqueue@2.0.0` ships `lib/index.d.ts` but its package.json "exports"
// map has no "types" condition, so TypeScript can't resolve it under
// `moduleResolution: bundler`. Declare the small surface we use.
declare module 'priorityqueue' {
  interface PriorityQueueOption<T> {
    comparator: (a: T, b: T) => number
  }

  class PriorityQueue<T> {
    constructor(option: PriorityQueueOption<T>)
    push(item: T): void
    pop(): T
    peek(): T
    isEmpty(): boolean
    readonly length: number
  }

  export default PriorityQueue
}
