
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  // Read the dynamic segment from the URL
  const { productId } = useParams(); // e.g., "101" if URL is /products/101

  // In real apps, you might fetch data using the ID here.
  return (
    <div>
      <h2>Product Detail</h2>
      <p>Showing details for Product ID: <strong>{productId}</strong></p>
    </div>
  );
}
