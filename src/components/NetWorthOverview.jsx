const NetWorthOverview = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col justify-between sm:flex-row">
      <div className="left">
        <h2 className="text-lg font-medium">Hello {user.name},</h2>
        <p>
          Your current <span className="font-bold">Networth</span> is
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Your net worth is updated every {user.lastUpdated}
        </p>
      </div>

      <p className="text-3xl font-bold text-blue-600">{user.netWorth}</p>
    </div>
  );
};

export default NetWorthOverview;
