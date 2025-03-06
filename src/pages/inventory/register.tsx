import { ChangeEvent, FormEvent, useState } from "react";
import ProfileImage from "../../assets/profile/item.png";
import Breadcrumb from "../../components/breadcrums";
import Header from "../../layouts/header";
import Sidemenu from "../../layouts/sidemenu";

interface FormData {
  supplier_id: string;
  firstname: string;
  lastname: string;
  contact_person: string;
  phone: string;
  email: string;
  products_supplied: string;
  price: string;
  payment_terms: string;
  delivery_shipping: string;
  delivery_schedule: string;
  compliance_status: string;
  postalcode: string;
  region: string;
  province: string;
  city: string;
  barangay: string;
  photo?: File | null;
}

const initialFormData: FormData = {
  supplier_id: "",
  firstname: "",
  lastname: "",
  contact_person: "",
  phone: "",
  email: "",
  products_supplied: "",
  price: "",
  payment_terms: "",
  delivery_shipping: "",
  delivery_schedule: "",
  compliance_status: "",
  postalcode: "",
  region: "",
  province: "",
  city: "",
  barangay: "",
  photo: null,
};

function Inventory_Registration() {
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
              title="Item Registration"
              links={[
                { text: "Item", link: "/inventorys"},
              ]}
              active="Register New Item"
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
                          ["Item ID", "supplierId", "bi bi-person-vcard"],
                          ["Item Name", "itemName", "bi bi-tag"],
                          ["Contact Person", "contactPerson", "bi-person-lines-fill"],
                          ["Phone", "phone", "bi bi-telephone", "tel"],
                          ["Email", "email", "bi bi-envelope", "email"],
                          ["Products Supplied", "productsSupplied", "bi bi-box-seam"],
                          ["Price", "price", "bi bi-currency-dollar"],
                          ["Payment Tems", "paymentTerms", "bi bi-credit-card"],
                          ["Delivery/Shipping Method", "deShipMe", "bi bi-truck"],
                          ["Compliance Status", "compStat", "bi bi-shield-check"],
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
                      <label className="block font-medium mb-1" htmlFor="biography">Note/Remarks</label>
                      <textarea id="biography"
                      name="biography" rows={3}
                        className="w-full px-3 py-2 border rounded focus:outline-none"
                        placeholder="write a short remarks..." />
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

export default Inventory_Registration;