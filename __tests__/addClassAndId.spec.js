import addClassAndId from '../src/util/addClassAndId';

describe('Element sets src and id', () => {
  test('sets src and id attribute', () => {
    var element = document.createElement('div');
    addClassAndId(element, 'foo', 'bar');
    
    expect(element.className).toBe('foo');
    expect(element.id).toBe('bar');
  });
});