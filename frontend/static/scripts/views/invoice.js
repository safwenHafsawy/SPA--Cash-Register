import AbstractView from "./abstractView.js";
const pathToImages = "http://localhost:5050/static/imgs";

export default class Ivoice extends AbstractView {
  constructor(params) {
    super();
    this.setTitle("Cash Register - Daily Income");
    this.options = params;
    this.invoices = JSON.parse(window.localStorage.getItem("invoices"));
    this.fullIncome = 0;
  }

  async getHTML() {
    if (!this.options && this.invoices.length === 0)
      return `
      <div id="empty_invoice">
          <h1> We've failed to sell anything today </h1>
      </div>
    `;
    else if (!this.options && this.invoices.length > 0)
      return `
          
<div id="invoice">
  <div id="order_invoice_display">
    ${this.invoices
      .map((ele, i) => {
        this.fullIncome += ele[2];
        return `
    <div class="single_order">
      <h5>order number ${ele[0]}</h5>
      <div class="order_details">
        <ul>
          ${ele[1]
            .map((ele) => {
              return `
          <li>${ele.join("&ratail;")}&dollar;</li>
          `;
            })
            .join(" ")}
        </ul>
      </div>
      <div class="order_price"><span>full price</span>  <span>${ele[2]} &dollar; </span> </div>
    </div>
    `;
      })
      .join(" ")}
  </div>
  <div id="full_income">
    <span>full income</span>
    <span>${this.fullIncome} &dollar;</span>
  </div>
</div>


      `;
  }
}
