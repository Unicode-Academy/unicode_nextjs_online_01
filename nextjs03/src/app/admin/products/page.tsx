import { can } from "@/app/utils/permissions";
import { cookies } from "next/headers";
import Link from "next/link";
export const getProducts = async () => {
  const cookieStore = await cookies();
  const token = JSON.parse(cookieStore.get("token")?.value as string);
  const response = await fetch(`${process.env.API_SERVER}/products`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return response.json();
};
export default async function Products() {
  const products = await getProducts();
  const CAN_CREATE = await can("products.add");
  const CAN_UPDATE = await can("products.update");
  const CAN_DELETE = await can("products.delete");
  return (
    <div>
      <h1>Products</h1>
      {CAN_CREATE && (
        <Link href="/admin/products/create" className="btn btn-primary mb-3">
          Thêm
        </Link>
      )}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Tên</th>
            <th>Giá</th>
            {CAN_UPDATE && <th>Sửa</th>}
            {CAN_DELETE && <th>Xóa</th>}
          </tr>
        </thead>
        <tbody>
          {products.map(
            (product: { id: number; name: string; price: number }) => (
              <tr key={product.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                {CAN_UPDATE && (
                  <td>
                    <a href="#" className="btn btn-warning btn-sm">
                      Sửa
                    </a>
                  </td>
                )}
                {CAN_DELETE && (
                  <td>
                    <a href="#" className="btn btn-danger btn-sm">
                      Xóa
                    </a>
                  </td>
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
