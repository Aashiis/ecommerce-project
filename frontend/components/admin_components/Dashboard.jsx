import RecentOrders from "./RecentOrders";

// components/Dashboard.js
export default function Dashboard() {
  return (
    <div className="flex flex-col bg-[#f9f7f7] h-screen w-full overflow-y-hidden pt-6 pl-6">
      <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
      <div className=" h-[2000] overflow-y-scroll overflow-x-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6 bg-[#f9f7f7] ">
      <JustTest name="Total Sales:" num="$10,000" icon="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" />
      <JustTest name="Total Orders:" num="150" icon="https://cdn-icons-png.flaticon.com/512/2910/2910766.png" />
      <JustTest name="Delivered:" num="500" icon="https://cdn-icons-png.flaticon.com/512/1019/1019709.png" />
      <JustTest name="Products:" num="120" icon="https://cdn-icons-png.flaticon.com/512/1040/1040932.png" />
    </div>
        <div className="overflow-x-scroll">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}

const JustTest = ({ name, num, icon }) => {
  return (
    <div className="flex items-center justify-center p-4 h-36 bg-white rounded-2xl shadow-md border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg">
      <div className="text-center text-gray-800">
        {/* Icon/Image */}
        <div className="flex items-center justify-center mb-3">
          <img src={icon} alt="icon" className="w-12 h-12 object-contain" />
        </div>

        {/* Card Content */}
        <h2 className="text-md font-medium">{name}</h2>
        <p className="text-2xl font-bold mt-1">{num}</p>
      </div>
    </div>
  );
};