import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchData() {
    const res = yield fetch("https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2").then(res => res.json());
    yield put({ type: "Received_Data", user: res.user });
}

function* actionWatcher() { yield takeLatest('FetchLoginData', fetchData) }

export default function* rootSaga() { yield all([actionWatcher()]); }