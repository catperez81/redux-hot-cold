import {reducer} from './reducer';
import {restartGame, makeGuess, generalAuralUpdate} from './actions';


describe('Reducer', () => {
	it('Should set the initial state', () => {
		// why pass through undefined? and type unknown? //
		const state =  reducer(undefined, {type: '_UNKNOWN'});

		expect(state.guesses).toEqual({[]});
		expect(state.feedback).toEqual('Make a guess!');
		expect(state.auralStatus).toEqual('');
		//never heard of the below method around greater than or equal to - is this just redux? //
		expect(state.correctAnswer).toBeGreaterThanOrEqual('0');
		expect(state.correctAnswer).toBeLessThanOrEqual('100');
	});
});

describe('RestartGame', () => {
	it('Should start a new game', () => {
	// set initial state to run this test //
		let state = {
			guesses: [1,2,3,4,5],
			feedback: 'You got it!', 
			correctAnswer: 5
		};

		const correctAnswer = 20;

		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make a guess!');
		expect(state.auralStatus).toEqual('');
		expect(state.correctAnswer).toEqual(correctAnswer);
});