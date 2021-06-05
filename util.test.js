const { generateText } = require('./util');

test('output name and age', () => {
  const text = generateText('Ashley', 19);
  expect(text).toBe('Ashley (19 years old)');
});

test('handle empty string', () => {
  const text = generateText('', 19);
  expect(text).toBe(' (19 years old)');
});

test('handle null', () => {
  const text = generateText('Ashley', null);
  expect(text).toBe('Ashley (null years old)');
});
