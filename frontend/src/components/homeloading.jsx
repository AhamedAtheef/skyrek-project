// components/BarLoader.jsx
export default function BarLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-8 bg-black rounded-sm p-[2px] bar-wave"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}
