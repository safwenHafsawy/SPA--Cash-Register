const addItemToOrderlist = (orderList, name, price) => {
  const itemInd = orderList.findIndex((ele) => ele[1] === name);
  if (itemInd !== -1) {
    orderList[itemInd][0]++;
    orderList[itemInd][2] += price;
  } else {
    orderList.push([1, name, price]);
  }

  return orderList;
};

const removeItemFormOrderlist = (orderList, name) => {
  const itemInd = orderList.findIndex((ele) => ele[1] === name);
  orderList[itemInd][2] -= orderList[itemInd][2] / orderList[itemInd][0];
  orderList[itemInd][0]--;
  if (orderList[itemInd][0] === 0) {
    orderList.splice(itemInd, 1);
  }
  return orderList;
};

export { addItemToOrderlist, removeItemFormOrderlist };
