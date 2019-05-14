

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const REST = 'REST'

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: REST}
}