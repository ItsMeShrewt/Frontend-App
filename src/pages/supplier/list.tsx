import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/profile/supplier.png";
import { Link } from 'react-router-dom';

const Supplier_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Supplier Name",
            width: "200px",
            formatter: (_, row) =>
              html(`
                <div class="flex items-center gap-3">
                <img src="${ProfileImage}"
                alt="Avatar" class="w-8 h-8 rounded-full" />
                <span>${row.cells[1].data}</span>
                </div>
                `)
          },
          { name: "Supplier ID", width: "100px" },
          { name: "Products Supplied", width: "200px" },
          { name: "Phone Number", width: "100px" },
          {
              name: "Action",
              width: "80px",
              formatter: () =>
                html(`
                    <div class="flex justify-center gap-2">
                      <button class="bg-yellow-500 text-white px-2 py-1 rounded text-xs flex items-center">
                        <i class="ri-pencil-line mr-1"></i>
                        <span class="px-1">Edit</span>
                      </button>
                      <button class="bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center">
                        <i class="ri-delete-bin-line mr-1"></i>
                        <span class="px-1">Delete</span>
                      </button>
                  `)
          },
        ],
        pagination: { limit: 10},
        search: true,
        sort: true,
        data: [

            ...[
              ["ABC Supplies", "S001", "Office Supplies", "09123456701"],
              ["XYZ Traders", "S002", "Electronics", "09123456702"],
              ["LMN Enterprises", "S003", "Raw Materials", "09123456703"],
              ["Global Goods", "S004", "Cleaning Products", "09123456704"],
              ["Quick Mart", "S005", "Grocery Items", "09123456705"],
              ["Speedy Supply", "S006", "Packaging Materials", "09123456706"],
              ["Quality Ventures", "S007", "Clothing", "09123456707"],
              ["Metro Merchants", "S008", "Building Materials", "09123456708"],
              ["Reliable Retail", "S009", "Machinery Parts", "09123456709"],
              ["Elite Imports", "S010", "Health Products", "09123456710"],
              ["Mega Distributors", "S011", "Home Appliances", "09123456711"],
              ["Superior Sellers", "S012", "Toys", "09123456712"],
              ["Smart Trade", "S013", "Beauty Products", "09123456713"],
              ["Bright Solutions", "S014", "Sports Equipment", "09123456714"],
              ["Pro Wholesale", "S015", "Books", "09123456715"],
              ["Fresh Market", "S016", "Fruits & Vegetables", "09123456716"],
              ["EverGreen Goods", "S017", "Furniture", "09123456717"],
              ["Sunshine Supply", "S018", "Beverages", "09123456718"],
              ["Trusted Traders", "S019", "Electronics", "09123456719"],
              ["Global Reach", "S020", "Office Furniture", "09123456720"]
            ].map((row, index) => [(index + 1) + ".", ...row]),
        ],
      }).render(gridRef.current);
    }
  }, []);

  return (
    <>
        <Header />
        <Sidemenu />
        <div className="main-content app-content">
          <div className="container-fluid">
            <Breadcrumb
                title="Manage Suppliers"
                links={[
                  { text: "Dashboard", link: "/suppliers" },
                ]}
                active="Supplier"
                buttons={
                  <Link to="/supplier/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add New Supplier
                  </Link>
                }
            />

            <div className="grid grid-cols-12 gap-x-6">
              <div className="xxl:col-span-12 col-span-12">
                <div className="box overflow-hidden main-content-card">
                  <div className="box-body p-5">
                    <div ref={gridRef}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Supplier_List;