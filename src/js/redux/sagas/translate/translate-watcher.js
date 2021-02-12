import {takeEvery} from "redux-saga/effects";

import * as TRANSLATE_ACTIONS from '../../actions/translate/translate-actions';
import translateQuery from './translate-worker';

export default function* translateWatcher() {
    yield takeEvery(TRANSLATE_ACTIONS.REQUEST_TRANSLATE, translateQuery);
}