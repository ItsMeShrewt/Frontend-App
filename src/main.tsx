import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import './assets/css/style.css'
import Dashboard from './pages/dashboard.tsx'
import Customer_Registration from './pages/customer/register.tsx';
import Customer_List from './pages/customer/list.tsx';
import Customer_List2 from './pages/customer/list2.tsx';
import Customer_List3 from './pages/customer/list3.tsx';
import Sales_List from './pages/product-sale/sales.tsx';
import Sales1 from './pages/product-sale/sales1.tsx';
import Sales2 from './pages/product-sale/sales2.tsx';
import Sales3 from './pages/product-sale/sales3.tsx';
import Sales4 from './pages/product-sale/sales4.tsx';
import Sales5 from './pages/product-sale/sales5.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customer_List />} />
        <Route path="/customers/list2" element={<Customer_List2 />} />
        <Route path="/customers/list3" element={<Customer_List3 />} />
        <Route path="/customer/create" element={<Customer_Registration />} />
        <Route path="/product-sales" element={<Sales_List />} />
        <Route path="/product-sales/sales1" element={<Sales1 />} />
        <Route path="/product-saleS/sales2" element={<Sales2 />} />
        <Route path="/product-sales/sales3" element={<Sales3 />} />
        <Route path="/product-sales/sales4" element={<Sales4 />} />
        <Route path="/product-sales/sales5" element={<Sales5 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
