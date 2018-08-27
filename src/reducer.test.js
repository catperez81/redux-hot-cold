import {reducer} from './reducer';
import {restartGame, makeGuess, generalAuralUpdate} from './actions';


describe('Reducer', () => {
	it('Should set the initial state', () => {
		let state =  reducer(undefined, {type: '_UNKNOWN'});

		expect(state).toEqual({[]});
		
	});
});