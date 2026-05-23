export default function Overview() {
  return (
    <div className="main-content">
      <div className="mb-4">
        <h1>Overview Dashboard</h1>

        <p className="text-muted">Monitor analytics and business insights</p>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="card-box">
            <p>Total Revenue</p>

            <h2>₹8.2L</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card-box">
            <p>Customers</p>

            <h2>12,540</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card-box">
            <p>Growth</p>

            <h2 className="text-success">+18%</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card-box">
            <p>Reports</p>

            <h2>24</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card-box">
            <h4>Revenue Analytics</h4>

            <div className="chart-box">Analytics Chart</div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-box">
            <h4>Customer Insights</h4>

            <div className="chart-box">Analytics Chart</div>
          </div>
        </div>
      </div>

      <div className="card-box">
        <h4>Power BI Overview</h4>

        <div className="chart-box" style={{ height: "350px" }}>
          Power BI Dashboard Placeholder
        </div>
      </div>
    </div>
  );
}
