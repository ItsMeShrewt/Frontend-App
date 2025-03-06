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
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
