const addClassAndId = (element, className, id) => {
  element.id = id;
  element.className += className;
}

export default addClassAndId;