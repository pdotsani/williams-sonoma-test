const addImgSrcAndClass = (element, className, src) => {
  element.src = src;
  element.className += className;
}

export default addImgSrcAndClass;