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
		// why is the below not an object and just an array? //
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make a guess!');
		expect(state.auralStatus).toEqual('');
		// why is the below different than the above for reducer?//
		expect(state.correctAnswer).toEqual(correctAnswer);
});

describe('MakeGuess', () => {
	it('Should make a guess', () => {
	let state = {
		guesses: [],
		feedback: '', 
		correctAnswer: 100
	};

	state = reducer(state, makeGuess(20));
	expect(state.guesses).toEqual([20]);
	expect(state.feedback).toEqual("You're Ice Cold...");

	state = reducer(state, makeGuess(50));
	expect(state.guesses).toEqual([50]);
	expect(state.feedback).toEqual("You're Cold...");

	state = reducer(state, makeGuess(70));
	expect(state.guesses).toEqual([70]);
	expect(state.feedback).toEqual("You're Warm...");

	state = reducer(state, makeGuess(90));
	expect(state.guesses).toEqual([90]);
	expect(state.feedback).toEqual("You're Hot...");

	state = reducer(state, makeGuess(100));
	expect(state.guesses).toEqual([100]);
	expect(state.feedback).toEqual("You got it!");


	});
});