import {reducer} from './reducer';
import {restartGame, makeGuess, generalAuralUpdate} from './actions';


//reducer generates initial state //

describe('Reducer', () => {
	it('Should set the initial state', () => {
		// in the reducer, default is initial state, if undefined we set it to initial state. Unknown could be whatever you want - return state would return this, an action that doesn't exist. You have to pass an action as an arguement - placeholder to run the test / no effect. //
		const state =  reducer(undefined, {type: 'placeholder'});

		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make a guess!');
		expect(state.auralStatus).toEqual('');
		// method that exists in testing framework from expect //
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
		state = reducer(state, restartGame(correctAnswer));
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make a guess!');
		expect(state.auralStatus).toEqual('');
		expect(state.correctAnswer).toEqual(correctAnswer);
});

describe('MakeGuess', () => {
	it('Should make a guess', () => {
	let state = {
		guesses: [],
		feedback: '', 
		correctAnswer: 100
	};

	// making sure reducer is calculating right feedback //

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