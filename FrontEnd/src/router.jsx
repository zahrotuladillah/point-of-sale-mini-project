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

      <Route path="/list-product" element={<ProductList />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/list-category" element={<CategoryList/>}/>
      <Route path="/add-category" element={<AddCategory/>}/>
      <Route path="/detail-product" element={<ProductDetail/>}/>
      <Route path="/detail-category" element={<CategoryDetail/>}/>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      {/* <Route path="/productdetail/:id" element={<ProductDetail />} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/detail-summary" element={<SummaryDetail/>} />
      <Route path="/history" element={<History/>}/>
      <Route path="/detail-transaction" element={<TransactionDetail/>}/>

      <Route
        path="*"
        element={<ErrorPage code="404" title="Ooopss Page Not Found" />}
      />
    </Routes>
  );
}
