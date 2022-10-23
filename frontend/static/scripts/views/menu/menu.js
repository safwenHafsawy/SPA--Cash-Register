import AbstractView from "../abstractView.js";
import menu_options from "./menu_options.js";

export default class Menu extends AbstractView {
  constructor(params) {
    super();
    this.setTitle("Cash Register - Menu");
    this.options = params ;
  }

  async getHTML() {
    if (!this.options) return menu_options[0];
    else return menu_options[parseInt(this.options)];
  }
}
