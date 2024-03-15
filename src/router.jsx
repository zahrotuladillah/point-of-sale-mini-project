import { Route, Routes, Navigate } from "react-router-dom";
import ProductList from "./pages/admin/productList";
import Dashboard from "./pages/user/dashboard";
import ProductDetail from "./pages/user/productDetail";
import ErrorPage from "./pages/error";
import AddProduct from "./pages/admin/addProduct";
import EditProduct from "./pages/admin/editProduct";
import Cart from "./pages/user/cart";
import SummaryDetail from "./pages/user/summaryDetail";

export default function Router() {
  return (
    <Routes>

      <Route path="/productlist" element={<ProductList />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/editproduct/:id" element={<EditProduct />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/summary-detail" element={<SummaryDetail/>} />

      <Route
        path="*"
        element={<ErrorPage code="404" title="Ooopss Page Not Found" />}
      />
    </Routes>
  );
}
