import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/profile/employee.png";
import { Link } from 'react-router-dom';

const Partner_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Partner Name",
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
          { name: "Partner ID", width: "150px" },
          { name: "Collaboration Type", width: "250px" },
          { name: "Phone Number", width: "80px" },
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
              ["ABC Corporation", "P001", "Joint Venture", "09123456701"],
              ["XYZ Solutions", "P002", "Marketing Partnership", "09123456702"],
              ["LMN Associates", "P003", "Strategic Alliance", "09123456703"],
              ["Global Partners", "P004", "Distribution Partnership", "09123456704"],
              ["Quick Expansion", "P005", "Licensing Agreement", "09123456705"],
              ["Speedy Growth", "P006", "Technology Collaboration", "09123456706"],
              ["Quality Alliance", "P007", "Affiliate Partnership", "09123456707"],
              ["Metro Holdings", "P008", "Sponsorship", "09123456708"],
              ["Reliable Network", "P009", "Outsourcing Agreement", "09123456709"],
              ["Elite Connections", "P010", "Financial Partnership", "09123456710"],
              ["Mega Corporations", "P011", "Development Partnership", "09123456711"],
              ["Superior Partners", "P012", "Co-Branding", "09123456712"],
              ["Smart Solutions", "P013", "Cross-Promotion", "09123456713"],
              ["Bright Enterprises", "P014", "Franchise Agreement", "09123456714"],
              ["Pro Consultants", "P015", "Equity Partnership", "09123456715"],
              ["Fresh Ventures", "P016", "Supply Chain Partnership", "09123456716"],
              ["EverGreen Innovations", "P017", "Joint Development", "09123456717"],
              ["Sunshine Collaborations", "P018", "Educational Partnership", "09123456718"],
              ["Trusted Associates", "P019", "Research Collaboration", "09123456719"],
              ["Global Unions", "P020", "Training Partnership", "09123456720"]              
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
                title="Manage Partners"
                links={[
                  { text: "Dashboard", link: "/partners" },
                ]}
                active="Partners"
                buttons={
                  <Link to="/partner/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add New Partner
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

export default Partner_List;