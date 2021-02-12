import * as TRANSLATE_ACTIONS from '../../actions/translate/translate-actions';

export function requestTranslate(searchRequestRu) {
    console.log('эктион-креатор отработал');
    return {
        type: TRANSLATE_ACTIONS.REQUEST_TRANSLATE,
        payload: searchRequestRu,
    }
}

export function requestTranslateSuccess(payload) {
    return {
        type: TRANSLATE_ACTIONS.REQUEST_TRANSLATE_SUCCESS,
        payload,
    }
}

export function requestTranslateFailure(payload) {
    return {
        type: TRANSLATE_ACTIONS.REQUEST_TRANSLATE_FAILURE,
        payload,
    }
}