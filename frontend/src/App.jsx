import { useEffect , useState} from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching msg', error));
  }, []);


return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      <ul className="space-y-3">
        {products.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500">ID: {item.id}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold text-green-600">
                ₹{item.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;