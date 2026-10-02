
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>useParams Demo</h1>

      {/* Simple navigation to demonstrate param changes */}
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/products/101">Product 101</Link>
        <Link to="/products/202">Product 202</Link>
        <Link to="/products/303">Product 303</Link>
      </nav>

      <Routes>
        {/* Dynamic route with a URL parameter named :productId */}
        <Route path="/products/:productId" element={<ProductDetail />} />

        {/* Optional default/fallback route */}
        <Route path="*" element={<p>Select a product above.</p>} />
      </Routes>
    </div>
  );
}
