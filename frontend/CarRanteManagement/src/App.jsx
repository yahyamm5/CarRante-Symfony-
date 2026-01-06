import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import FullFeaturedCrudGrid from './testing/FullFeaturedCrudGrid'
import Create_Product from "./pages/Create_Product"
import NewLeaseAgreement from "./pages/NewLeaseAgreement"
import CreateCar from "./pages/CreateCar"
import Cars from "./pages/Cars"
import CreateCustomer from "./pages/CreateCustomer"
import Customers from "./pages/Customers"
import LeaseAgreement from "./pages/LeaseAgreement"

function App() {


  return (
      <Routes >
        <Route path="/" element={<HomePage/>} />
        <Route path="/datagrid" element={<FullFeaturedCrudGrid/>} />
        <Route path="/create" element={<Create_Product/>}/>
        <Route path="/newLeaseAgreement" element={<NewLeaseAgreement/>}/>
        <Route path="/createCar" element={<CreateCar/>}/>
        <Route path="/allCars" element={<Cars/>} />
        <Route path="/createCustomer" element={<CreateCustomer/>} ></Route>
        <Route path="/allCustomers" element={<Customers/>}></Route>
        <Route path="/contracts" element={<LeaseAgreement/>}></Route>
      </Routes>
  )
}

export default App