module.exports = (temp, product) => {
  let output = temp
    .replace(/{%NAME%}/g, product.productName)
    .replace(/{%QUANTITY%}/g, product.quantity)
    .replace(/{%FROM%}/g, product.from)
    .replace(/{%DESCRIPTION%}/g, product.description)
    .replace(/{%PRICE%}/g, product.price)
    .replace(/{%NUTRIENTS%}/g, product.nutrients)
    .replace(/{%IMAGE%}/g, product.image)
    .replace(/{%IMAGE%}/g, product.image)
    .replace(/{%ID%}/g, product.id);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};
