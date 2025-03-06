import { ChangeEvent, FormEvent, useState } from "react";
import ProfileImage from "../../assets/profile/student.png";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

interface FormData {
  student_id: string;
  firstname: string;
  lastname: string;
  middlename: string;
  gender: string;
  birthdate: string;
  year_section: string;
  guardian_name: string;
  guardian_contact: string;
  email: string;
  phone: string;
  enrollment_date: string;
  enrollment_status: string;
  postalcode: string;
  region: string;
  province: string;
  city: string;
  barangay: string;
  photo?: File | null;
}

const initialFormData: FormData = {
  student_id: "",
  firstname: "",
  lastname: "",
  middlename: "",
  gender: "",
  birthdate: "",
  year_section: "",
  guardian_name: "",
  guardian_contact: "",
  email: "",
  phone: "",
  enrollment_date: "",
  enrollment_status: "",
  postalcode: "",
  region: "",
  province: "",
  city: "",
  barangay: "",
  photo: null,
};


function Student_Registration() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [imagePreview, setImagePreview] = useState<string>(ProfileImage);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
      setFormData({ ...formData, photo: file });
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(ProfileImage);
    setFormData({ ...formData, photo: null });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">

          <Breadcrumb
              title="Student Registration"
              links={[
                { text: "Student", link: "/students"},
              ]}
              active="Register New Student"
          />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-12 col-span-12">
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-start gap-4">
                      <span className="avatar avatar-xxl">
                          <img src={imagePreview} alt="Profile" id="profile-img" />
                      </span>
                      <div className="mt-2">
                        <label className="block font-medium mb-2">Profile Picture</label>
                        <div className="flex gap-2">
                          <label className="bg-gray-300 text-dark px-4 py-2 rounded cursor-pointer">
                            <i className="bi bi-upload"></i>
                            <span className="px-2">Upload</span>
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                          </label>
                          <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={handleRemoveImage}>
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <hr className="mt-3 mb-4" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                          ["Student ID", "studentId", "bi bi-person-vcard"],
                          ["First Name", "firstName", "bi bi-person"],
                          ["Last Name", "lastName", "bi bi-person"],
                          ["Middle Name", "middleName", "bi bi-person"],
                          ["Birthdate", "middleName", "bi bi-calendar"],
                          ["Gender", "gender", "bi bi-gender-ambiguous"],
                          ["Course", "course", "bi bi-mortarboard"],
                          ["Year & Section", "yearSection", "bi bi-list"],
                          ["Guardian Name", "guardianName", "bi bi-person"],
                          ["Guardian Contact", "guardianContact", "bi bi-telephone", "tel"],
                          ["Email", "email", "bi bi-envelope", "email"],
                          ["Student Contact", "phone", "bi bi-telephone", "tel"],
                          ["Enrollment Date", "enrollmentDate", "bi bi-calendar-check"],
                          ["Enrollment Status", "enrollmentStatus", "bi bi-circle-fill"],
                          ["Postal Code", "postalCode", "bi bi-mailbox"],
                      ].map(([label, name, icon, type = "text"]) => (
                        <div key={name} className="relative">
                          <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
                          <div className="relative">
                            <input type={type} id={name} name={name} onChange={handleChange}
                              className="ti-form-input rounded-sm ps-11 focus:z-10"
                              placeholder={`Enter ${label}`} />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                              <i className={icon}></i>
                            </div>
                          </div>
                        </div>
                      ))}
                      {[
                          ["Region", "region", ["Region 1", "Region 2", "Region 3"]],
                          ["Province", "province", ["Province A", "Province B", "Province C"]],
                          ["City", "city",["City X", "City Y", "City Z"]],
                          ["Barangay", "barangay", ["Barangay 1", "Barangay 2", "Barangay 3"]],
                      ].map(([label, name, options]) => (
                        <div key={String(name)}>
                          <label className="block font-medium mb-1">{label}</label>
                          <select id={String(name)} name={String(name)} 
                            onChange={handleChange}
                            className="ti-form-input rounded-sm focus:z-10">
                            <option value="">Select {label}</option>
                            {(options as string[]).map((option: string, index: number)=> (
                              <option key={index} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <label className="block font-medium mb-1" htmlFor="biography">Biographical Info</label>
                      <textarea id="biography"
                      name="biography" rows={3}
                        className="w-full px-3 py-2 border rounded focus:outline-none"
                        placeholder="write a short bio..." />
                    </div>

                    <div className="mt-4 flex justify-end gap-4">
                      <button type="reset" className="bg-gray-300  px-4 py-2 rounded" onClick={() => setFormData(initialFormData)}>Reset</button>
                      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                        <i className="bi bi-save"></i>
                        <span className="px-3">Submit Record</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student_Registration;