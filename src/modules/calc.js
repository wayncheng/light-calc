export const SET_VARIABLE_VALUE      = 'calc/SET_VARIABLE_VALUE'
export const TOGGLE_LOCK      = 'calc/TOGGLE_LOCK'
export const CALC_EXPOSURE      = 'calc/CALC_EXPOSURE'

// ! Changing ISO just amplifies the EV change. e.g. If aperture increased, exposure gets darker. If ISO is then increased, it just pushes EV even darker, even though increasing ISO should ALWAYS make make exposure lighter.
// TODO: Proper implementation of ISO factor. Currently broken.

const initialState = {


		values: {
			shutter: 1,
			aperture: "1.4",
			iso: 100,
			ev: 1,
			// ev_diff: 0,
		},
		locks: {
			shutter: false,
			aperture: false,
			iso: false,
			ev: false,
		}
}

export default (state = initialState, action) => {
	switch (action.type) {

		case SET_VARIABLE_VALUE:
			return {
				...state,
				values: {
					...state.values,
					[action.param]: action.value,
				}
			}

		case TOGGLE_LOCK:
			return {
				...state,
				locks: {
					...state.locks,
					[action.param]: !state.locks[action.param],
				}
			}
		
		case CALC_EXPOSURE:
			return {
				...state,
				values: {
					...state.values,
					ev: action.value,
				}
			}

		default:
			return state
	}
}

// Form Updates ------------------------------------
export const toggleLock = param => dispatch => {
	dispatch({
		type: TOGGLE_LOCK,
		param,
	})
}
export const setVariableValue = (param,value) => dispatch => {
	dispatch({
		type: SET_VARIABLE_VALUE,
		param,
		value,
	})
}

export const calculateExposure = all_values => dispatch => {
	const {shutter,aperture,iso} = all_values;
	// * Exposure = log2(aperture^2/shutter)
	// ? iso factor

	const isoFactor = iso / 100;
	
	const exposure = Math.log2( Math.pow(aperture,2) / shutter) * isoFactor;
	console.log('exposure:',exposure)

	// dispatch({
	// 	type: CALC_EXPOSURE,
	// 	value: exposure,
	// })

	dispatch( setVariableValue('ev',exposure) )
}

export const updateVariable = (param,value,all_values) => dispatch => {
	// dispatch({
	// 	type: SET_VARIABLE_VALUE,
	// 	param,
	// 	value,
	// })

	dispatch( setVariableValue(param,value) )

	dispatch( calculateExposure(all_values) )
}
///////////////////////////////////////////////////////////////////////
