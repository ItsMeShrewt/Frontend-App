import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/profile/vendor.png";
import { Link } from 'react-router-dom';

const Vendor_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Vendor Name",
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
          { name: "Vendor ID", width: "100px" },
          { name: "Contact Person", width: "200px" },
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
              ["ABC Supplies", "V001", "John Doe", "09123456701"],
              ["XYZ Traders", "V002", "Jane Smith", "09123456702"],
              ["LMN Enterprises", "V003", "Mark Brown", "09123456703"],
              ["Global Goods", "V004", "Alice Johnson", "09123456704"],
              ["Quick Mart", "V005", "Robert White", "09123456705"],
              ["Speedy Supply", "V006", "Emily Davis", "09123456706"],
              ["Quality Ventures", "V007", "Michael Scott", "09123456707"],
              ["Metro Merchants", "V008", "Sarah Lee", "09123456708"],
              ["Reliable Retail", "V009", "David Miller", "09123456709"],
              ["Elite Imports", "V010", "Laura Wilson", "09123456710"],
              ["Mega Distributors", "V011", "James Anderson", "09123456711"],
              ["Superior Sellers", "V012", "Patricia Adams", "09123456712"],
              ["Smart Trade", "V013", "Daniel Martinez", "09123456713"],
              ["Bright Solutions", "V014", "Lisa Clark", "09123456714"],
              ["Pro Wholesale", "V015", "Joseph Walker", "09123456715"],
              ["Fresh Market", "V016", "Nancy Hall", "09123456716"],
              ["EverGreen Goods", "V017", "Kevin Allen", "09123456717"],
              ["Sunshine Supply", "V018", "Betty Harris", "09123456718"],
              ["Trusted Traders", "V019", "Chris Young", "09123456719"],
              ["Global Reach", "V020", "Samantha King", "09123456720"]              
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
                title="Manage Vendors"
                links={[
                  { text: "Dashboard", link: "/vendors" },
                ]}
                active="Vendors"
                buttons={
                  <Link to="/vendor/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add New Vendor
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

export default Vendor_List;