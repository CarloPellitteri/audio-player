import { addZeros, getMinutesFromSeconds } from './utilities';

describe('addZeros', () => {
  describe('when I treat 5', () => {
    it('should return "05" in string', () => {
      const received = addZeros(5);
      const expected = '05';

      expect(received).toBe(expected);
    });
  });
});

describe('getMinutesFromSeconds', () => {
  describe('when I treat a number in seconds (136 seconds)', () => {
    it('should return a string (in minutes format) with zeros ("02:16")', () => {
      const received = getMinutesFromSeconds(136);
      const expected = '02:16';

      expect(received).toBe(expected);
    });
  });
});
