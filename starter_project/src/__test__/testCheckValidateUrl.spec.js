import { validateUrl } from '../client/js/validateUrl';

describe('validateUrl', () => {
    test('should return true for valid URLs', () => {
        expect(validateUrl('https://www.test.com')).toBe(true);
        expect(validateUrl('http://test.com')).toBe(true);
        expect(validateUrl('https://sub.test.com')).toBe(true);
        expect(validateUrl('test.com')).toBe(true);
        expect(validateUrl('http://test.com/path/to/resource')).toBe(true);
    });

    test('should return false for invalid URLs', () => {
        expect(validateUrl('invalidurl')).toBe(false);
        expect(validateUrl('http:/test.com')).toBe(false);
        expect(validateUrl('test')).toBe(false);
        expect(validateUrl('')).toBe(false);
    });

    test('should return false for empty or undefined values', () => {
        expect(validateUrl(undefined)).toBe(false);
        expect(validateUrl(null)).toBe(false);
        expect(validateUrl('')).toBe(false);
    });
});