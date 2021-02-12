import * as TRANSLATE_ACTIONS from '../../actions/translate/translate-actions';

const initialState = {    
    translate: {
        ru: 'привет',
        eng: '',
        loading: false,
        error: {
            status: false,
            message: '',
        },
    }
}

export default function translateReducer(state = initialState, action) {
    switch(action.type) {
        case TRANSLATE_ACTIONS.REQUEST_TRANSLATE:
            return {
                ...state,
                translate: {
                    ...state.translate,
                    ru: action.payload,
                    loading: true,
                }
            };
        case TRANSLATE_ACTIONS.REQUEST_TRANSLATE_SUCCESS:
            return {
                ...state,
                translate: {
                    ...state.translate,
                    eng: action.payload,
                    loading: false,
                }
            };
        case TRANSLATE_ACTIONS.REQUEST_TRANSLATE_FAILURE:
            return {
                ...state,
                translate: {
                    ...state.translate,
                    error: {
                        ...state.translate.error,
                        loading: false,
                        status: true,
                        message: action.payload,
                    }
                }
            };
        default:
            return state;
    }
}