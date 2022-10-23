import AbstractView from "./abstractView.js";

export default class Change extends AbstractView {
  constructor() {
    super();
    this.setTitle("Cash Register - Change");
  }

  getHTML() {
    return `<h1>Change view</h1>`;
  }
}
