export default class AbstractView {
  constructor() {}

  setTitle(title) {
    document.title = title;
  }

  getHTML() {
    return ``;
  }
}
