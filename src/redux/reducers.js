import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

const makes = (state = [], {type,value}) => {
    switch(type) {
        case 'FETCH_MAKES':
            return value
        default:
            return state
    }
}

export default combineReducers({ user, cars, makes })