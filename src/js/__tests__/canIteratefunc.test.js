import canIterate from '../canIterateFunc';

test.each([
  { dataType: {}, result: false },
  { dataType: 'Строки', result: true },
  { dataType: [], result: true },
])('Проверка для $dataType', ({ dataType, result }) => {
  expect(canIterate(dataType)).toBe(result);
});
