import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { to: "/product-sales/sales1", img: "/images/item1.png", label: "Item 1" },
  { to: "/product-sales/sales2", img: "/images/item2.png", label: "Item 2" },
  { to: "/product-sales/sales3", img: "/images/item3.png", label: "Item 3" },
  { to: "/product-sales/sales4", img: "/images/item4.png", label: "Item 4" },
  { to: "/product-sales/sales5", img: "/images/item5.png", label: "Item 5" },
];

const ItemButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {items.map(({ to, img, label }) => (
        <Link
          key={label}
          to={to}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <img src={img} alt={label} className="w-4 h-10" />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default ItemButtons;
