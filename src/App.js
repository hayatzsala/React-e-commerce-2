import "./styles.css";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./routes/ProductsList";
import ProductInfo from "./routes/ProductInfo";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductInfo />} />
    </Routes>
  );
}
