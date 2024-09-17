const greet = require('./greet');

test('should return "Hello name" when name is provided', () => {
    const name = 'Fania';
    const result = greet(name);
    expect(result).toBe('Hello Fania');
});
