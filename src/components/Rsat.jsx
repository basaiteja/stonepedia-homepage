export default function Rsat() {
  const stats = [
    { value: "1M+", label: "SQ FT STONE DELIVERED" },
    { value: "2", label: "NATIONAL/GLOBALLY AWARD" },
    { value: "20+", label: "PROJECT COMPLETED" },
    { value: "99.9%", label: "CUSTOMER SATISFIED" },
  ];

  return (
    <div
      className="flex justify-between items-center bg-gray-50 p-8"
      style={{ padding:"0 20vh 10vh 20vh" }} // Center-align the entire section
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center bg-white p-6 shadow-md w-1/4 mx-2"
        >
          <h1 className="text-4xl font-bold text-gray-800">{stat.value}</h1>
          <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
