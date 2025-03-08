import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/profile/financial.png";
import { Link } from 'react-router-dom';

const Financial_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Account Name",
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
          { name: "Financial ID", width: "150px" },
          { name: "Bank Name", width: "250px" },
          { name: "Account Number", width: "80px" },
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
              ["BDO Savings", "F001", "BDO", "123456789"],
              ["Metrobank Checking", "F002", "Metrobank", "987654321"],
              ["Landbank Business", "F003", "Landbank", "456123789"],
              ["UnionBank Digital", "F004", "UnionBank", "321654987"],
              ["RCBC Payroll", "F005", "RCBC", "741852963"],
              ["BPI Family", "F006", "BPI", "852963741"],
              ["PNB Corporate", "F007", "PNB", "369852147"],
              ["Chinabank Premier", "F008", "Chinabank", "258741369"],
              ["Security Bank Flex", "F009", "Security Bank", "147258369"],
              ["DBP Development", "F010", "DBP", "987321654"],
              ["HSBC Global", "F011", "HSBC", "654987321"],
              ["EastWest Basic", "F012", "EastWest", "321987654"],
              ["Maybank Exclusive", "F013", "Maybank", "741369258"],
              ["Sterling Bank Loan", "F014", "Sterling Bank", "852147369"],
              ["PSBank Personal", "F015", "PSBank", "963258741"],
              ["AllBank Access", "F016", "AllBank", "147369852"],
              ["CIMB GoSave", "F017", "CIMB", "258963147"],
              ["ING Direct", "F018", "ING", "369147258"],
              ["WealthBank Elite", "F019", "WealthBank", "987654123"],
              ["Global Funds", "F020", "Chinabank", "567890123"]              
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
                title="Manage Financial"
                links={[
                  { text: "Dashboard", link: "/financials" },
                ]}
                active="Financials"
                buttons={
                  <Link to="/financial/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add Financial Record
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

export default Financial_List;