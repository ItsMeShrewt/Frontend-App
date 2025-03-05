import React, { useEffect, useRef } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

import ProfileImage from "../../assets/profile/student.png";
import { Link } from 'react-router-dom';

const Student_List: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    if (gridRef.current) {
      new Grid({
        columns: [
          { name: "#", width: "10px"},
          {
            name: "Student Name",
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
          { name: "Student ID", width: "100px" },
          { name: "Course", width: "200px" },
          { name: "Year & Section", width: "100px" },
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
              ["Richie Dadubo", "20230493", "Bachelor of Science in Information Technology", "2B"],
              ["Ginell Cabunoc", "00001111", "Bachelor of Science in Information Technology", "2B"],
              ["Dessa Mae Krism Cardinez", "00001112", "Bachelor of Science in Information Technology", "2B"],
              ["Rexyl Ann Bacarro", "00001113", "Bachelor of Science in Information Technology", "2B"],
              ["John Carlo Villarosa", "00001114", "Bachelor of Science in Information Technology", "2B"],
              ["Rachiel Torrejos", "00001115", "Bachelor of Science in Information Technology", "2B"],
              ["Angeline Auza", "00001116", "Bachelor of Science in Information Technology", "2B"],
              ["Honeyleth Monteadora", "00001117", "Bachelor of Science in Information Technology", "2B"],
              ["Gwendoline Diane Octavio", "00001118", "Bachelor of Science in Information Technology", "2B"],
              ["Cyra Chanille Linga", "00001119", "Bachelor of Science in Information Technology", "2B"],
              ["Kyle Vestal", "00001120", "Bachelor of Science in Information Technology", "2B"],
              ["Nash Stephen Ello", "00001121", "Bachelor of Science in Information Technology", "2B"],
              ["Jeffrey Tabasan", "00001122", "Bachelor of Science in Information Technology", "2B"],
              ["Lowrence Castillon", "00001123", "Bachelor of Science in Information Technology", "2B"],
              ["Lourdesito Samayla", "00001124", "Bachelor of Science in Information Technology", "2B"],
              ["John Jerry Cabon", "00001125", "Bachelor of Science in Information Technology", "2B"],
              ["Julius Maderal", "00001126", "Bachelor of Science in Information Technology", "2B"],
              ["Jade Galos", "00001127", "Bachelor of Science in Information Technology", "2B"],
              ["", "", "Bachelor of Science in Information Technology", "2B"],
              ["", "", "Bachelor of Science in Information Technology", "2B"]
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
                title="Manage Students"
                links={[
                  { text: "Dashboard", link: "/students" },
                ]}
                active="Students"
                buttons={
                  <Link to="/student/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                    <i className="ri-add-line"></i> Add New Student
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

export default Student_List;