import AbstractView from "./abstractView.js";

export default class Order extends AbstractView {
  constructor() {
    super();
    this.setTitle("Cash Register - Order");
  }

  getHTML() {
    return `Order view`;
  }
}
