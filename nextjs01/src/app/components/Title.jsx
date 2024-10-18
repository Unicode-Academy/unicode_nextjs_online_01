export default function Title({
  name,
  email,
  productName,
  price,
  description,
  salePrice,
  children,
}) {
  const css = {
    color: "red",
    fontStyle: "italic", //font-style
    backgroundColor: "yellow", //background-color
    paddingBlock: "10px", //padding-block
  };
  return (
    <div>
      <h2 style={css}>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h3>Product Name: {productName}</h3>
      <h3>Product Price: {price}</h3>
      <h3>Product Description: {description}</h3>
      <h3>Sale Price: {salePrice}</h3>
      {children}
      <button>Click me</button>
    </div>
  );
}
