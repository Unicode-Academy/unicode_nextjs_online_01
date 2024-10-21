"use client";
export default function Menu() {
  console.log("Menu");

  //   localStorage.setItem("token", "ahihi");
  const handleClick = (e) => {
    console.log("Ok chưa?");
    console.log(e);
  };
  const handleDoubleClick = (title) => {
    console.log(title);
  };
  const menuList = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const handleClickMenuItem = (index) => {
    console.log(index);
  };
  const handleMouseOver = (e) => {
    e.target.style.color = "red";
  };
  return (
    <>
      <h2
        onDoubleClick={(e) => handleDoubleClick(e.target.innerText)}
        onMouseOver={handleMouseOver}
      >
        Menu Navigation
      </h2>
      <button onClick={handleClick}>Click me</button>
      <ul>
        {menuList.map((item, index) => (
          <li key={index} onClick={() => handleClickMenuItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
