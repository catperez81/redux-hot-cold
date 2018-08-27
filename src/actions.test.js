import {GENERATE_AURAL_UPDATE, generalAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from './actions';

describe('generalAuralUpdate', () => {
    it('Should return the action', () => {
        const action = generalAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('Should return the action', () => {
    	const correctAnswer = 25;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('MAKE_GUESS', () => {
    it('Should return the action', () => {
    	const correctAnswer = 25;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

