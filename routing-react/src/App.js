
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      {/* Simple navigation for the demo */}
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* Route matching happens here */}
      <Routes>
        {/* When URL is /about, render <About /> */}
        <Route path="/about" element={<About />} />

        {/* When URL is /dashboard, render <Dashboard /> */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional: default route */}
        <Route path="*" element={<div>Select a page from the nav.</div>} />
      </Routes>
    </div>
  );
}
