export const tick = date => ({
  type: 'TICK',
  payload: date
})

export const registerTimeout = (callee, timeout) => ({
  type: 'REGISTER_TIMEOUT',
  payload: { callee, timeout }
})

export const registerInterval = (callee, interval, immediate) => ({
  type: 'REGISTER_INTERVAL',
  payload: { callee, interval, immediate }
})

export const timeoutRegistered = () => ({
  type: 'TIMEOUT_REGISTERED'
})

export const intervalRegistered = () => ({
  type: 'INTERVAL_REGISTERED'
})

export const cancelTimeout = (id) => ({
  type: 'CANCEL_TIMEOUT',
  payload: id
})

export const cancelInterval = (id) => ({
  type: 'CANCEL_INTERVAL',
  payload: id
})
