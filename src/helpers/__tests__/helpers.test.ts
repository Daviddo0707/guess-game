import {hideRandomLetters} from '../helpers';

it('should hide at least one character', () => {
    const result = hideRandomLetters('testing123');
    const includesHiddenLetter = result.includes('_');
    expect(includesHiddenLetter).toBeTruthy();
});
