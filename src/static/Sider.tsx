import React from "react";

const Sider = () => {
  const nav = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Create",
      path: "/create",
    },
    {
      id: 3,
      title: "View",
      path: "/view",
    },
  ];
  return (
    <div>
      <div className="mt-20 ">
        {nav.map((el) => (
          <div
            className={`hover:bg-neutral-50 hover:text-white py-2  rounded-md mx-2 mb-2 duration-300 uppercase text-[14px]`}
          >
            {el.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sider;
