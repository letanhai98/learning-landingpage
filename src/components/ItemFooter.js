import React from "react";
const ItemFooter = ({ item, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col gap-[20px] h-[100%] max-lg:flex max-lg:flex-col max-lg:items-center"
    >
      <h3 className="about-title text-color1 text-[18px] font-medium max-lg:flex max-lg:flex-col max-lg:items-center">
        {item.title}
      </h3>
      <ul className="flex flex-col gap-[10px] cursor-pointer max-lg:flex max-lg:flex-col max-lg:items-center">
        {item.link.map((link, nlink) => {
          return (
            <li key={nlink} className="link-about">
              <a href={link.url} className="links"></a>
              {link.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ItemFooter;
