const addClassAndHTML = (element, className, html) => {
  element.innerHTML = html;
  element.className += className;
}

export default addClassAndHTML;