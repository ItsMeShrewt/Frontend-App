import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/profile/product.png";
import { Link } from 'react-router-dom';

const Product_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Product Name",
            width: "150px",
            formatter: (_, row) =>
              html(`
                <div class="flex items-center gap-3">
                <img src="${ProfileImage}"
                alt="Avatar" class="w-8 h-8 rounded-full" />
                <span>${row.cells[1].data}</span>
                </div>
                `)
          },
          { name: "Product ID", width: "150px" },
          { name: "Category", width: "250px" },
          { name: "Price", width: "80px" },
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
              ["Smartphone", "P001", "Electronics", "₱30,000"],
              ["Tablet", "P002", "Electronics", "₱18,000"],
              ["Laptop", "P003", "Electronics", "₱45,000"],
              ["Printer", "P004", "Office Equipment", "₱8,000"],
              ["Wireless Earbuds", "P005", "Electronics", "₱3,500"],
              ["Smartwatch", "P006", "Wearable Tech", "₱12,000"],
              ["Gaming Mouse", "P007", "Accessories", "₱2,500"],
              ["Mechanical Keyboard", "P008", "Accessories", "₱5,000"],
              ["Bluetooth Speaker", "P009", "Audio", "₱6,500"],
              ["External Hard Drive", "P010", "Storage", "₱4,500"],
              ["Air Purifier", "P011", "Home Appliances", "₱15,000"],
              ["Security Camera", "P012", "Home Security", "₱10,000"],
              ["LED Monitor", "P013", "Displays", "₱14,000"],
              ["Power Bank", "P014", "Electronics", "₱2,000"],
              ["Electric Scooter", "P015", "Transportation", "₱25,000"],
              ["Drone", "P016", "Gadgets", "₱40,000"],
              ["Microwave Oven", "P017", "Kitchen Appliances", "₱9,000"],
              ["Graphic Tablet", "P018", "Creative Tools", "₱7,500"],
              ["VR Headset", "P019", "Gaming", "₱35,000"],
              ["Gaming Console", "P020", "Entertainment", "₱40,000"]              
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
                title="Manage Product"
                links={[
                  { text: "Dashboard", link: "/products" },
                ]}
                active="Products"
                buttons={
                  <Link to="/product/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add New Product
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

export default Product_List;