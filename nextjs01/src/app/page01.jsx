import React from "react";
import Title from "./components/Title";
export default function HomePage() {
  const text = <i>Học lập trình không khó</i>; //parse
  const status = false;
  const isLogin = true;
  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
  ];
  //Tạo 1 mảng mới, mỗi phần tử chứa 1 React Element
  // const userJsx = users.map((user) => {
  //   return <li key={user.id}>{user.name}</li>;
  // });
  // console.log(userJsx);
  const product = {
    productName: "Product 1",
    price: 1000,
    description: "Product 1 description",
    salePrice: 500,
  };
  return (
    <>
      {isLogin && (
        <>
          <Title
            name="Hoàng An"
            email="hoangan.web@gmail.com"
            // productName={product.productName}
            // price={product.price}
            // description={product.description}
            {...product}
          >
            <h4>Unicode Academy</h4>
          </Title>

          <h2>Học Next không khó</h2>
          <h2>{status ? text : "Không có gì"}</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            earum aliquam quam! Vero modi unde molestiae deleniti quis inventore
            deserunt dolorem reprehenderit animi quisquam, esse cupiditate nulla
            aperiam a eveniet.
          </p>
          <ul>
            {users.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
}
