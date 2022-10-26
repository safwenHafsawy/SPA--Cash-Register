import AbstractView from "./abstractView.js";

export default class Order extends AbstractView {
  constructor() {
    super();
    this.setTitle("Cash Register - Order");
  }

  async getHTML() {
    const currentorder = JSON.parse(
      window.localStorage.getItem("currentOrder")
    );
    let fullPrice = 0;
    if (currentorder.length === 0)
      return `<div id="order">
          <h2 id="order_header">No order yet</h2>
      </div>`;
    return `
  <div id="order">
      <h1 id="order_header">Current Order</h1>
      <ul id="list_of_items">
         ${currentorder
           .map((item, i) => {
             fullPrice += parseFloat(item[2]);
             return `
        <li class="order_items" id="item_${i + 1}">    
          Name & number <span class="item_name">${item[0]} ${
               item[1]
             }</span> &xrarr;
           Price <span class="item_price">${item[2]} &dollar;</span>
           <span class="remove_item" data-item="${item[1]}">remove</span>
         </li>`;
           })
           .join(" ")}
          <li class="order_items" id="fullPrice"> 
            <span>Full Price</span>
            <span> ${fullPrice} &dollar;</span> 
          </li>
      </ul>
      <div id="order_action">
         <button id="validate_order">Validate Order</button>
         <button id="clear_order">Clear Order</button>
      </div>
  </div>
`;
  }
}
