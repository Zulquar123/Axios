import axios from "axios";
import { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";

export default function Services() {
  const [data, setData] = useState([]);
  const getData = () => {
    const API = "https://fakestoreapi.com/products";
    axios
      .get(API)
      .then((products) => {
        setData(products.data);
        console.log(products.data);
      })
      .catch((err) => console.log(err));
    };
    
    useEffect(() => {
        getData();
    }, []);

  return (
    <div className="flex flex-col">
      <div>
        <button
          className="px-2 py-1 bg-sky-500 hover:bg-sky-700  mx-10 rounded-md text-white"
        >
          Call API Data Automatically
        </button>
      </div>
      <hr className="my-1" />
      <ul className="mt-5">
        {data.length > 0 ? (
          data.map((product) => <li key={product.id}>{product.title}</li>)
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
}
