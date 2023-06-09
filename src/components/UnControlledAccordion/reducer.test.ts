import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test('collapsed should be true', ()=>{
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)
})
test('reducer should throw error because action type is incorrect', ()=>{
    //data
    const state: StateType = {
        collapsed: true
    }

    //expectation
    expect(()=>{
        reducer(state, {type: 'FAKE'})
    }).toThrowError()
})