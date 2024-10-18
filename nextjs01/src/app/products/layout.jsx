export default function ProductsLayout({ children }) {
  return (
    <div className="product-layout">
      <aside>
        <h2>Danh mục sản phẩm</h2>
        <ul>
          <li>Product Category 1</li>
          <li>Product Category 2</li>
          <li>Product Category 3</li>
        </ul>
      </aside>
      <div className="content">{children}</div>
    </div>
  );
}
