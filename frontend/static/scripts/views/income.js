import AbstractView from "./abstractView.js";

export default class Income extends AbstractView {
  constructor() {
    super();
    this.setTitle("Cash Register - Daily Income");
  }

  async getHTML() {
    return `<h1>
        <a href="/income/1" data-link>Test</a>
    </h1>`;
  }
}