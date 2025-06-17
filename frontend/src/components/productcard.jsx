import "./productcard.css"


// use function name first latter uppercase
export default function ProductCard(props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg p-4 max-w-sm">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h1>
      <p className="text-lg text-green-600 font-medium mb-4">${props.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        View More
      </button>
    </div>
  );
}
