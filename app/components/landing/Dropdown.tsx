"use client";

import React from "react";

type Props = {
  items: { label: string; icon?: string }[];
};

const DropdownLanguages = (Props: Props) => {
  const { items } = Props;
  return (
    <select
      defaultValue={items[0].label}
      className="rounded-sm border border-[#808080] bg-black/50 px-4 py-1 text-sm text-white"
    >
      {items.map((item, index) => {
        return (
          <option value={item.label} key={index}>
            {" "}
            {item.label}
          </option>
        );
      })}
    </select>
  );
};
export default DropdownLanguages;
