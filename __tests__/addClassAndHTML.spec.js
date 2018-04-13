import addClassAndHTML from '../src/util/addClassAndHTML';

describe('Element sets src and id', () => {
  test('sets src and id attribute', () => {
    var element = document.createElement('div');
    addClassAndHTML(element, 'foo', '<div id="inner"></div>');
    
    expect(element.innerHTML).toBe('<div id="inner"></div>');
    expect(element.className).toBe('foo');
  });
});