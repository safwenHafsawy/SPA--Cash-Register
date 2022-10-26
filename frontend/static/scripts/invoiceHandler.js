const addOrderToInvoice = (invoiceList, orderList, fullPrice) => {
  let orderNumber = 1;
  if (invoiceList.length > 0) {
    orderNumber = invoiceList.at(-1)[0] + 1;
  }
  const newInvoice = [orderNumber, orderList, fullPrice];
  invoiceList.push([...newInvoice]);
  window.localStorage.setItem("invoices", JSON.stringify(invoiceList));
};

export { addOrderToInvoice };
