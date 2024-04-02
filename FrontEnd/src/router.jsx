import { Route, Routes, Navigate } from "react-router-dom";
import ProductList from "./pages/admin/productList";
import Dashboard from "./pages/user/dashboard";
import ProductDetail from "./pages/admin/productDetail";
import ErrorPage from "./pages/error";
import AddProduct from "./pages/admin/addProduct";
import EditProduct from "./pages/admin/editProduct";
import Cart from "./pages/user/cart";
import SummaryDetail from "./pages/user/summaryDetail";
import History from "./pages/user/history";
import TransactionDetail from "./pages/user/transactionDetail";
import CategoryList from "./pages/admin/categoryList";
import AddCategory from "./pages/admin/addCategory";
import CategoryDetail from "./pages/admin/categoryDetail";

export default function Router() {
  return (
    <Routes>

      <Route path="/productlist" element={<ProductList />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/editproduct/:id" element={<EditProduct />} />
      <Route path="/categorylist" element={<CategoryList/>}/>
      <Route path="/addcategory" element={<AddCategory/>}/>
      <Route path="productdetail" element={<ProductDetail/>}/>
      <Route path="categorydetail" element={<CategoryDetail/>}/>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      {/* <Route path="/productdetail/:id" element={<ProductDetail />} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/summary-detail" element={<SummaryDetail/>} />
      <Route path="/history" element={<History/>}/>
      <Route path="/transaction-detail" element={<TransactionDetail/>}/>

      <Route
        path="*"
        element={<ErrorPage code="404" title="Ooopss Page Not Found" />}
      />
    </Routes>
  );
}
