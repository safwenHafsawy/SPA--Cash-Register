import Menu from "./views/menu/menu.js";
import Invoice from "./views/invoice.js";
import NotFound from "./views/notFound.js";
import Order from "./views/order.js";
import { navigator, router } from "./routing.js";
import {
  addItemToOrderlist,
  removeItemFormOrderlist,
} from "./ordersHandler.js";
import { addOrderToInvoice } from "./invoiceHandler.js";

const classesObj = { Menu, Order, Invoice, NotFound };
//getting DOM elements
const display = document.getElementById("display");

//event listners
window.addEventListener("popstate", router(classesObj, display));

document.addEventListener("DOMContentLoaded", () => {
  //checking if order and invoice  lists exists , if not create one
  if (!window.localStorage.getItem("currentOrder"))
    window.localStorage.setItem("currentOrder", JSON.stringify([]));
  if (!window.localStorage.getItem("invoices"))
    window.localStorage.setItem("invoices", JSON.stringify([]));

  //loading content using router function
  router(classesObj, display);

  document.addEventListener("click", (e) => {
    let currentOrder = JSON.parse(window.localStorage.getItem("currentOrder"));
    let currentInvoices = JSON.parse(window.localStorage.getItem("invoices"));

    if (e.target.matches("[data-link]")) {
      e.preventDefault(); //preventing page reloading
      navigator(e.target.href, classesObj, display);
    }

    if (e.target.hasAttribute("data-menu")) {
      const targetClasses = e.target.getAttribute("class").split(" ");
      navigator("/" + targetClasses.at(-1), classesObj, display);
    }

    if (
      e.target.className === "menu__card" ||
      e.target.closest(".menu__card")
    ) {
      if (e.target.className === "menu__card")
        addItemToOrderlist(
          currentOrder,
          e.target.id,
          parseFloat(e.target.getAttribute("data-price"))
        );
      else
        addItemToOrderlist(
          currentOrder,
          e.target.parentElement.getAttribute("id"),
          parseFloat(e.target.parentElement.getAttribute("data-price"))
        );
      window.localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
    }

    if (e.target.className === "check_btn") {
      navigator("/currentoreder", classesObj, display);
    }

    if (e.target.className === "remove_item") {
      currentOrder = removeItemFormOrderlist(
        currentOrder,
        e.target.getAttribute("data-item")
      );
      window.localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
      router(classesObj, display);
    }

    if (e.target.id === "validate_order") {
      const fullPrice = parseFloat(
        document.getElementById("fullPrice").children[1].innerText.split(" ")
      );
      addOrderToInvoice(currentInvoices, currentOrder, fullPrice);
      currentOrder = [];
      window.localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
      navigator("/invoice", classesObj, display);
    }

    if (e.target.id === "clear_order") {
      currentOrder = [];
      window.localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
      router(classesObj, display);
    }
  });
});
