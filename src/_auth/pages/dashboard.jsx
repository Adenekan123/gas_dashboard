const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top banner */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">User's Name</h1>
        </div>
        <div>
          <p>Total KG used this month</p>
          {/* Dropdown to show daily usage for current month */}
          <select className="bg-gray-900 text-white p-2 rounded">
            <option value="day1">Day 1</option>
            <option value="day2">Day 2</option>
            {/* Add more options for each day */}
          </select>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-4">
        {/* Likelihood finish date prediction */}
        <section className="bg-white p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">
            Likelihood Finish Date Prediction
          </h2>
          {/* Add content here */}
        </section>

        {/* Cylinder size */}
        <section className="bg-white p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Cylinder Size</h2>
          {/* Add content here */}
        </section>

        {/* Monthly summary history */}
        <section className="bg-white p-4">
          <h2 className="text-lg font-bold mb-2">Monthly Summary History</h2>
          {/* Show date filed and date end */}
          <ul>
            <li>Date Filed: [Date]</li>
            <li>Date End: [Date]</li>
            {/* Add more summary items */}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
