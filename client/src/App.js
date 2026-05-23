import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./componentes/sidebar";
import Upload from "./componentes/upload";
import DynamicDashboard from "./componentes/pages/dynamicdashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-slate-100 p-6 min-h-screen">
          <Routes>
            <Route path="/" element={<DynamicDashboard />} />

            <Route path="/expense-trends" element={<DynamicDashboard />} />

            <Route path="/category-insights" element={<DynamicDashboard />} />

            <Route path="/transactions" element={<DynamicDashboard />} />

            <Route path="/healthcare" element={<DynamicDashboard />} />

            <Route path="/disease-analysis" element={<DynamicDashboard />} />

            <Route path="/hospital-insights" element={<DynamicDashboard />} />

            <Route path="/patient-records" element={<DynamicDashboard />} />

            <Route path="/product-insights" element={<DynamicDashboard />} />

            <Route path="/regional-analysis" element={<DynamicDashboard />} />

            <Route path="/customer-records" element={<DynamicDashboard />} />
            
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
