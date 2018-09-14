import { 
	UPDATE_INPUT,
	TOGGLE_LOCK,
	CALC_EXPOSURE,
} from './actionTypes';


const initialState = {
	// params: {
		// shutter: {
		// 	value: 10,
		// 	isLocked: false
		// },
		// aperture: {
		// 	value: 2.8,
		// 	isLocked: false
		// },
		// iso: {
		// 	value: 1600,
		// 	isLocked: false
		// },
		// exposure: {
		// 	value: 0,
		// 	isLocked: false
		// },

		values: {
			shutter: 10,
			aperture: 2.8,
			iso: 1600,
			exposure: 0,
		},
		locks: {
			shutter: false,
			aperture: false,
			iso: false,
			exposure: false,
		}
	// }
}

export default (state = initialState, action) => {
	switch (action.type) {

		case UPDATE_INPUT:
			
			return {
				...state,
					// [action.payload.variable]: {
					// 	...state[action.payload.variable],
					// 	value: action.payload.value
					// }
				values: {
					...state.values,
					[action.payload.param]: action.payload.value,
				}
			}
		case TOGGLE_LOCK:
			return {
				...state,
				// [action.param]: {
				// 	...state[action.param],
				// 	isLocked: !state[action.param].isLocked,
				// },
				locks: {
					...state.locks,
					[action.param]: !state.locks[action.param],
				}
			}
		
		case CALC_EXPOSURE:
			return {
				...state,
				exposure: {
					...state.exposure,
					// value: action.value,
				}
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

export const calculateExposure = () => dispatch => {
	dispatch({
		type: CALC_EXPOSURE
	})
}

///////////////////////////////////////////////////////////////////////
