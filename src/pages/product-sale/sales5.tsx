import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/avatar.png";
import ItemButtons from "../../components/buttons.tsx";

const Sales5: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "40px"},
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
          { name: "Price", width: "200px" },
          { name: "Quantity", width: "150px" },
          {
              name: "Action",
              width: "110px",
              formatter: () =>
                html(`
                    <div class="flex justify-center gap-2" >
                      <button class="bg-yellow-500 text-white px-2 py-3 rounded-md text-s flex items-center">
                        <i class="ri-pencil-line mr-1"></i>
                        <span class="px-1">Checkout</span>
                      </button>
                  `)
          },
        ],
        pagination: { limit: 7},
        search: true,
        sort: true,
        data: [

            ...[
              ["Lumber 2x2x3", "₱150", "50 pcs"],
              ["Umbrella Nails", "₱500", "10 boxes"],
              ["Roof", "₱3000", "20 sheets"],
              ["Plywood 4x8", "₱900", "30 sheets"],
              ["Cement (40kg)", "₱250", "100 bags"],
              ["Paint 1L", "₱180", "40 cans"]
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
                title="Manage Customers"
                links={[
                  { text: " Dashboard", link: "/customers" },
                ]}
                active="Products"
            />

            <div className="grid grid-cols-12 gap-x-6">
              <div className="xxl:col-span-8 col-span-12">
                <div className="box overflow-hidden main-content-card">
                  <div className="box-body p-5">
                    <h5 className="mt-0 mb-0">
                      <span>Categories</span>
                    </h5>
                    <hr className="mt-3 mb-4" />
                    <ItemButtons/>
                    <hr className="mt-3 mb-4" />
                    <h5 className="mt-0 mb-0">
                      <span>Items List</span>
                    </h5>
                    <hr className="mt-3 mb-4" />
                    <div ref={gridRef}></div>
                  </div>
                </div>
              </div>
              <div className="xxl:col-span-4 col-span-12">
                <div
                  className="box overflow-hidden main-content-card flex flex-col justify-between"
                  style={{ height: "650px" }}
                >
                  {/* Box Body */}
                  <div className="box-body p-5">
                    <h5 className="mt-0 mb-0">
                      <span>Orders</span>
                    </h5>
                    <hr className="mt-3 mb-4" />
                    <div className="bg-gray-100 p-4 rounded mb-2 flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Lumber 2x2x3</p>
                          <p className="text-sm text-gray-600">Price: ₱57</p>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mb-2">
                        <p className="font-semibold">Umbrella Nails</p>
                        <p className="text-sm text-gray-600">Price: ₱32</p>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mb-2">
                        <p className="font-semibold">Roof</p>
                        <p className="text-sm text-gray-600">Price: ₱111</p>
                      </div>
                  </div>
                  <div className="p-5 border-t bg-gray-50 flex justify-between items-center">
                    <span className="font-medium text-lg text-gray-600">Total:</span>
                    <span className="text-lg font-semibold text-gray-800">₱200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Sales5;