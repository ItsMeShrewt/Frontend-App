
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Sidemenu() {
return (
<>
    <aside className="app-sidebar" id="sidebar">
      <div className="main-sidebar-header">
        <a href="/" className="header-logo"></a>
      </div>
      <div className="main-sidebar" id="sidebar-scroll">
        <nav className="main-menu-container nav nav-pills flex-col sub-open">
          <div className="slide-left" id="slide-left">
          </div>
          <ul className="main-menu">
            <li>
              <a href="">
                <center>
                  <img src={logo} className="transparent-shadow" style={{ maxHeight: '150px' }} />
                </center>
              </a>
            </li>
            <li>
            <hr className='mt-3' />
            </li>
            <li className="slide__category"><span className="category-name">Main</span></li>
            <li className="slide">
              <Link to="/" className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-speedometer"></i>
                <span className="side-menu__label">
                  Dashboard &ensp;
                  <span className=" translate-middle badge !rounded-full bg-danger"> 5+ </span>
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/customers' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-people-fill"></i>
                <span className="side-menu__label">
                  Manage Customers
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/students' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-mortarboard-fill"></i>
                <span className="side-menu__label">
                  Manage Student
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/employees' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-person-fill-gear"></i>
                <span className="side-menu__label">
                  Manage Employees
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/vendors' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-shop"></i>
                <span className="side-menu__label">
                  Manage Vendors
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/clients' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-person-fill"></i>
                <span className="side-menu__label">
                  Manage Client
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/suppliers' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-truck"></i>
                <span className="side-menu__label">
                  Manage Supplier
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/partners' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-briefcase-fill"></i>
                <span className="side-menu__label">
                  Manage Partner
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/inventorys' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-box-fill"></i>
                <span className="side-menu__label">
                  Manage Inventory
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/sales' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-cart-fill"></i>
                <span className="side-menu__label">
                  Manage Sales
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/financials' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-cash"></i>
                <span className="side-menu__label">
                  Manage Financial
                </span>
              </Link>
            </li>
            <li className="slide">
              <Link to='/products' className="side-menu__item">
                <i className="w-6 h-4 side-menu__icon bi bi-boxes"></i>
                <span className="side-menu__label">
                  Manage Product
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
</>
)
}

export default Sidemenu