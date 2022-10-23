import AbstractView from "./abstractView.js";

export default class NotFound extends AbstractView {
  constructor() {
    super();
    this.setTitle("Oops !");
  }

  getHTML() {
    return "<h1>Oops ! Look like the link you followed is invalid</h1>";
  }
}
