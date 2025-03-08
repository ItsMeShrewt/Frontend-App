import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/profile/item.png";
import { Link } from 'react-router-dom';

const Inventory_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Item Name",
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
          { name: "Item ID", width: "100px" },
          { name: "Stock Quantity", width: "200px" },
          { name: "Selling Price", width: "100px" },
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
              ["Laptop", "I001", "50", "₱45,000"],
              ["Printer", "I002", "20", "₱8,000"],
              ["Mouse", "I003", "100", "₱500"],
              ["Keyboard", "I004", "75", "₱1,200"],
              ["Monitor", "I005", "30", "₱10,000"],
              ["Office Chair", "I006", "40", "₱5,000"],
              ["Desk", "I007", "25", "₱6,000"],
              ["Projector", "I008", "15", "₱15,000"],
              ["External Hard Drive", "I009", "60", "₱4,500"],
              ["Wireless Router", "I010", "35", "₱3,000"],
              ["Coffee Maker", "I011", "10", "₱2,500"],
              ["Smartphone", "I012", "45", "₱30,000"],
              ["Tablet", "I013", "25", "₱18,000"],
              ["USB Flash Drive", "I014", "200", "₱600"],
              ["Notebook", "I015", "300", "₱200"],
              ["Whiteboard", "I016", "12", "₱7,000"],
              ["Air Conditioner", "I017", "8", "₱25,000"],
              ["Speaker System", "I018", "20", "₱12,000"],
              ["Webcam", "I019", "50", "₱3,500"],
              ["Headphones", "I020", "90", "₱2,000"]              
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
                  { text: "Dashboard", link: "/inventorys" },
                ]}
                active="Supplier"
                buttons={
                  <Link to="/inventory/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add New Item
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

export default Inventory_List;