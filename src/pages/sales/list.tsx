import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/avatar.png";
import { Link } from 'react-router-dom';

const Sales_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Customer Name",
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
          { name: "Sales ID", width: "150px" },
          { name: "Invoice Number", width: "250px" },
          { name: "Sales Date", width: "80px" },
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
              ["John Doe", "S001", "INV1001", "2024-03-01"],
              ["Jane Smith", "S002", "INV1002", "2024-03-02"],
              ["Mark Brown", "S003", "INV1003", "2024-03-03"],
              ["Alice Johnson", "S004", "INV1004", "2024-03-04"],
              ["Robert White", "S005", "INV1005", "2024-03-05"],
              ["Emily Davis", "S006", "INV1006", "2024-03-06"],
              ["Michael Scott", "S007", "INV1007", "2024-03-07"],
              ["Sarah Lee", "S008", "INV1008", "2024-03-08"],
              ["David Miller", "S009", "INV1009", "2024-03-09"],
              ["Laura Wilson", "S010", "INV1010", "2024-03-10"],
              ["James Anderson", "S011", "INV1011", "2024-03-11"],
              ["Patricia Adams", "S012", "INV1012", "2024-03-12"],
              ["Daniel Martinez", "S013", "INV1013", "2024-03-13"],
              ["Lisa Clark", "S014", "INV1014", "2024-03-14"],
              ["Joseph Walker", "S015", "INV1015", "2024-03-15"],
              ["Nancy Hall", "S016", "INV1016", "2024-03-16"],
              ["Kevin Allen", "S017", "INV1017", "2024-03-17"],
              ["Betty Harris", "S018", "INV1018", "2024-03-18"],
              ["Chris Young", "S019", "INV1019", "2024-03-19"],
              ["Samantha King", "S020", "INV1020", "2024-03-20"]              
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
                title="Manage Sales"
                links={[
                  { text: "Dashboard", link: "/sales" },
                ]}
                active="Sales"
                buttons={
                  <Link to="/sale/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add New Sales
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

export default Sales_List;