/**
 *  This function takes list of sagas or 1 saga
 *  cancel each of them
 */
export function* cancelSaga(sagas) {
  if (Array.isArray(sagas)) {
    for (let i = 0; i < sagas.length; i += 1) {
      yield cancel(sagas[i]);
    }
  } else {
    yield cancel(sagas);
  }
}
