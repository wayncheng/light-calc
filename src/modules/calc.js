import { 
	UPDATE_INPUT,
	TOGGLE_LOCK,
} from './actionTypes';


const initialState = {
	// params: {
		aperture: {
			value: 2.8,
			isLocked: false
		},
		shutter: {
			value: "1/4000",
			isLocked: false
		},
		iso: {
			value: 1600,
			isLocked: false
		},
		exposure: {
			value: 0,
			isLocked: false
		},
	// }
}

export default (state = initialState, action) => {
	switch (action.type) {

		case UPDATE_INPUT:
			
			return {
				...state,
				// params: {
					// ...state.params,
					[action.payload.variable]: {
						...state[action.payload.variable],
						value: action.payload.value
					}
				// }
				// [action.payload.variable]: action.payload.value
			}
		case TOGGLE_LOCK:
			return {
				...state,
				// params: {
					// ...state.params,
					[action.param]: {
						...state[action.param],
						isLocked: !state[action.param].isLocked,
					}
				// }
			}


		default:
			return state
	}
}

// Form Updates ------------------------------------
export const updateInput = payload => dispatch => {
	dispatch({
		type: UPDATE_INPUT,
		payload,
	})
}
export const toggleLock = param => dispatch => {
	dispatch({
		type: TOGGLE_LOCK,
		param,
	})
}


///////////////////////////////////////////////////////////////////////
