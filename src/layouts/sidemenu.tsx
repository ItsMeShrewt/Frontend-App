import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Sidemenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <>
      <aside className="app-sidebar" id="sidebar">
        <div className="main-sidebar-header">
          <a href="/" className="header-logo"></a>
        </div>
        <div className="main-sidebar" id="sidebar-scroll">
          <nav className="main-menu-container nav nav-pills flex-col sub-open">
            <div className="slide-left" id="slide-left"></div>
            <ul className="main-menu">
              <li>
                <a href="">
                  <center>
                    <img
                      src={logo}
                      className="transparent-shadow"
                      style={{ maxHeight: '150px' }}
                    />
                  </center>
                </a>
              </li>

              <li>
                <hr className="mt-3" />
              </li>

              <li className="slide__category">
                <span className="category-name">Main</span>
              </li>

              <li className="slide">
                <Link to="/" className="side-menu__item">
                  <i className="w-6 h-4 side-menu__icon bi bi-speedometer"></i>
                  <span className="side-menu__label">
                    Dashboard &ensp;
                    <span className="translate-middle badge !rounded-full bg-danger">
                      5+
                    </span>
                  </span>
                </Link>
              </li>
              <li className="slide">
                <Link to="/product-sales" className="side-menu__item">
                  <i className="w-6 h-4 side-menu__icon bi bi-bag"></i>
                  <span className="side-menu__label">
                    Products
                  </span>
                </Link>
              </li>

              {/* DROPDOWN ITEM */}
              <li className={`slide ${isDropdownOpen ? 'open' : ''}`}>
                <div
                  className="side-menu__item cursor-pointer flex items-center justify-between"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center">
                    <i className="w-6 h-4 side-menu__icon bi bi-box-seam-fill"></i>
                    <span className="side-menu__label">Inventory</span>
                  </div>
                  <i
                    className={`bi ${
                      isDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'
                    } ml-auto`}
                  ></i>
                </div>

                {/* Submenu styled like sidebar items */}
                {isDropdownOpen && (
                  <ul className="submenu pl-8 mt-2">
                    <li className="slide">
                      <Link to="/customers" className="side-menu__item">
                        <i className="w-6 h-4 side-menu__icon bi bi-building-fill"></i>
                        <span className="side-menu__label">Warehouse A</span>
                      </Link>
                    </li>
                    <li className="slide">
                      <Link to="/customers/list2" className="side-menu__item">
                        <i className="w-6 h-4 side-menu__icon bi bi-building-fill"></i>
                        <span className="side-menu__label">Warehouse B</span>
                      </Link>
                    </li>
                    <li className="slide">
                      <Link to="/customers/list3" className="side-menu__item">
                        <i className="w-6 h-4 side-menu__icon bi bi-building-fill"></i>
                        <span className="side-menu__label">Warehouse C</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="slide">
                <Link to="/product-sales" className="side-menu__item">
                  <i className="w-6 h-4 side-menu__icon bi bi-receipt"></i>
                  <span className="side-menu__label">
                    Purchased History
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidemenu;
