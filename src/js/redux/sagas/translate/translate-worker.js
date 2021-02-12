import { put, call, select } from 'redux-saga/effects';

import getSearchQueryRu from './translate-selectors';
import { rapidGoogleTranslate, rapidGoogleTranslateOptions } from '../../../api/rapid-google-translate';
import { requestTranslateSuccess, requestTranslateFailure } from '../../actions-creator/translate/translate-actions-creator';


function fetchTranslate(text) {    
    return fetch(rapidGoogleTranslate(text), rapidGoogleTranslateOptions())
}


function* translateQuery() {
    const searchQuery = yield select(getSearchQueryRu);
    try {
        const translateRequest = yield call(fetchTranslate, searchQuery);
        if (translateRequest.status >= 200 && translateRequest.status < 300) {
            const translate = yield translateRequest.json();
            yield put(requestTranslateSuccess(translate.responseData.translatedText));
        } else {
            throw translateRequest;
        }
    } catch (error) {
        yield put(requestTranslateFailure(error.statusText));
    }
    
}

export { translateQuery as default };