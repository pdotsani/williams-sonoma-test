import addImgSrcAndClass from '../src/util/addImgSrcAndClass';

describe('Image sets src and class', () => {
  test('sets src and classattribute', () => {
    var testImg = document.createElement('img');
    addImgSrcAndClass(testImg, 'foo', './bar.img');
    
    expect(testImg.className).toBe('foo');
    expect(testImg.src).toBe('./bar.img');
  });
});
