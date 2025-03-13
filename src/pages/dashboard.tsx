import Breadcrumb from "../components/breadcrums";
import Header from "../layouts/header";
import Sidemenu from "../layouts/sidemenu";
function Dashboard() {
return (
<>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">
          <Breadcrumb />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-4 col-span-12">
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5">
                    <p className="mt-2 mb-0"><h5><span>Sales</span></h5></p>
                    <hr className="mt-3 mb-4" />
                </div>
              </div>
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5">
                  <h5 className="mt-2 mb-0"><span>Low Supply</span></h5>
                  <hr className="mt-3 mb-4" />
                </div>
              </div>
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5">
                  <h5 className="mt-2 mb-0"><span>Purchased History</span></h5>
                  <hr className="mt-3 mb-4" />
                  <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div> 
            <div className="xxl:col-span-8 col-span-12">
              <div className="box overflow-hidden main-content-card" style={{ height: '700px' }}>
                <div className="box-body p-5">
                  <h5 className="mt-2 mb-0"><span>Pending Orders</span></h5>
                  <hr className="mt-3 mb-4" />

                  {/* === BOX CONTAINER === */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Walk-in / Pick-up Box */}
                    <div className="box bg-white rounded-lg shadow p-4">
                      <h6 className="font-semibold text-lg mb-3">Walk-in / Pick-up Orders</h6>
                      
                      {/* Example Order Item */}
                      <div className="bg-gray-100 p-4 rounded mb-2 flex items-center justify-between">
                        {/* LEFT SIDE: Order details */}
                        <div>
                          <p className="font-semibold">Order #001 - John Doe</p>
                          <p className="text-sm text-gray-600">Status: Ready for Pick-up</p>
                        </div>

                        {/* RIGHT SIDE: Button */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                          See More
                        </button>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mb-2">
                        <p>Order #001 - John Doe</p>
                        <p>Status: Ready for Pick-up</p>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mb-2">
                        <p>Order #001 - John Doe</p>
                        <p>Status: Ready for Pick-up</p>
                      </div>
                      
                      {/* Add more orders here */}
                    </div>

                    {/* Delivery Orders Box */}
                    <div className="box bg-white rounded-lg shadow p-4">
                      <h6 className="font-semibold text-lg mb-3">Delivery Orders</h6>

                      {/* Example Order Item */}
                      <div className="bg-gray-100 p-3 rounded mb-2">
                        <p>Order #002 - Jane Smith</p>
                        <p>Status: Out for Delivery</p>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mb-2">
                        <p>Order #002 - Jane Smith</p>
                        <p>Status: Out for Delivery</p>
                      </div>
                      <div className="bg-gray-100 p-3 rounded mb-2">
                        <p>Order #002 - Jane Smith</p>
                        <p>Status: Out for Delivery</p>
                      </div>

                      {/* Add more orders here */}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
)
}

export default Dashboard