import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import './assets/css/style.css'
import Dashboard from './pages/dashboard.tsx'
import Customer_Registration from './pages/customer/register.tsx';
import Customer_List from './pages/customer/list.tsx';
import Student_Registration from './pages/student/register.tsx';
import Student_List from './pages/student/list.tsx';
import Employee_Registration from './pages/employee/register.tsx';
import Employee_List from './pages/employee/list.tsx';
import Vendor_Registration from './pages/vendor/register.tsx';
import Vendor_List from './pages/vendor/list.tsx';
import Client_Registration from './pages/client/register.tsx';
import Client_List from './pages/client/list.tsx';
import Supplier_Registration from './pages/supplier/register.tsx';
import Supplier_List from './pages/supplier/list.tsx';
import Partner_Registration from './pages/partner/register.tsx';
import Partner_List from './pages/partner/list.tsx';
import Inventory_Registration from './pages/inventory/register.tsx';
import Inventory_List from './pages/inventory/list.tsx';
import Sales_Registration from './pages/sales/register.tsx';
import Sales_List from './pages/sales/list.tsx';
import Financial_Registration from './pages/financial/register.tsx';
import Financial_List from './pages/financial/list.tsx';
import Product_Registration from './pages/product/register.tsx';
import Product_List from './pages/product/list.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customer_List />} />
        <Route path="/customer/create" element={<Customer_Registration />} />
        <Route path="/students" element={<Student_List />} />
        <Route path="/student/create" element={<Student_Registration />} />
        <Route path="/employees" element={<Employee_List />} />
        <Route path="/employee/create" element={<Employee_Registration />} />
        <Route path="/vendors" element={<Vendor_List />} />
        <Route path="/vendor/create" element={<Vendor_Registration />} />
        <Route path="/clients" element={<Client_List />} />
        <Route path="/client/create" element={<Client_Registration />} />
        <Route path="/suppliers" element={<Supplier_List />} />
        <Route path="/supplier/create" element={<Supplier_Registration />} />
        <Route path="/partners" element={<Partner_List />} />
        <Route path="/partner/create" element={<Partner_Registration />} />
        <Route path="/inventorys" element={<Inventory_List />} />
        <Route path="/inventory/create" element={<Inventory_Registration />} />
        <Route path="/sales" element={<Sales_List />} />
        <Route path="/sale/create" element={<Sales_Registration />} />
        <Route path="/financials" element={<Financial_List />} />
        <Route path="/financial/create" element={<Financial_Registration />} />
        <Route path="/products" element={<Product_List />} />
        <Route path="/product/create" element={<Product_Registration />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
