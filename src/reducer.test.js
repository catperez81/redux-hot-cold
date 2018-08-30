import {reducer} from './reducer';
import {restartGame, makeGuess, generalAuralUpdate} from './actions';


describe('Reducer', () => {
	it('Should set the initial state', () => {
		const state =  reducer(undefined, {type: '_UNKNOWN'});

		expect(state.guesses).toEqual({[]});
		expect(state.feedback).toEqual('Make a guess!');
		expect(state.auralStatus).toEqual('');

	});
});