import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/profile/employee.png";
import { Link } from 'react-router-dom';

const Client_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Client Name",
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
          { name: "Email", width: "150px" },
          { name: "Address", width: "250px" },
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
              ["John Doe", "johndoe@example.com", "Tagoloan", "09851893711"],
              ["Jane Smith", "janesmith@example.com", "Tagoloan", "09123456701"],
              ["Mark Brown", "markbrown@example.com", "Tagoloan", "09123456702"],
              ["Alice Johnson", "alicej@example.com", "Tagoloan", "09123456703"],
              ["Robert White", "robertw@example", "Tagoloan", "09123456704"],
              ["Emily Davis", "emilyd@example.com", "Tagoloan", "09123456705"],
              ["Michael Lee", "michaell@example.com", "Tagoloan", "09123456706"],
              ["Sarah Kim", "sarahk@example.com", "Tagoloan", "09123456707"],
              ["William Harris", "williamh@example.com", "Tagoloan", "09123456707"],
              ["Olivia Martinez", "oliviam@example.com", "Tagoloan", "09123456708"],
              ["David Wilson", "davidw@example.com", "Tagoloan", "09123456709"],
              ["Sophia Thomas", "sophiat@example.com", "Tagoloan", "09123456710"],
              ["Daniel Moore", "danielm@example.com", "Tagoloan", "09123456711"],
              ["Mia Scott", "mias@example.com", "Tagoloan", "09123456712"],
              ["James Taylor", "jamest@example.com", "Tagoloan", "09123456713"],
              ["Issabela Clark", "issabelac@example.com", "Tagoloan", "09123456714"],
              ["Benjamin Lewis", "benjaminl@example.com", "Tagoloan", "09123456715"],
              ["Charlotte Young", "charlottey@example.com", "Tagoloan", "09123456716"],
              ["Henry Walker", "henryw@example.com", "Tagoloan", "09123456717"],
              ["Ava Hall", "avah@example.com", "Tagoloan", "09123456718"]
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
                title="Manage Clients"
                links={[
                  { text: "Dashboard", link: "/clients" },
                ]}
                active="Clients"
                buttons={
                  <Link to="/client/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add New Client
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

export default Client_List;