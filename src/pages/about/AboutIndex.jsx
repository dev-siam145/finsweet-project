import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/common/Container";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { div } from "framer-motion/client";
import { toast } from "react-toastify";

const AboutIndex = () => {
  const [formData, setFormData] = useState({
    productName: "",
    details: "",
    price: "",
  });

  const [product, setProduct] = useState([]);

  const url = "https://dummyjson.com/products";
  const addProductUrl = "https://dummyjson.com/products/add";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        setProduct(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleForm = async () => {
    const response = await axios.post(addProductUrl, {
      title: formData.productName,
      description: formData.details,
      price: formData.price,
    });
    console.log(response);
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col gap-4 items-start">
          <h4>Create Product</h4>
          <input
            type="text"
            onChange={handleFormChange}
            name="productName"
            placeholder="Product Name"
            className="border"
          />
          <input
            type="text"
            onChange={handleFormChange}
            name="details"
            placeholder="Product Details"
            className="border"
          />
          <input
            type="number"
            onChange={handleFormChange}
            name="price"
            placeholder="Price"
            className="border"
          />
          <button onClick={handleForm} className="bg-primary px-8 py-3">
            Submit
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          {product.length > 0
            ? product?.map((item, index) => {
                return (
                  <div key={index} className="bg-primary p-10">
                    {item.images && (
                      <img src={item.images || ""} alt="not found" />
                    )}
                    <span>{item.price || <Skeleton count={1} />}</span>
                    <h3 className="text-xl font-bold">
                      {item.title || <Skeleton count={1} />}
                    </h3>
                    <p className="mt-5">
                      {item.description || <Skeleton count={1} />}
                    </p>
                    <p className="mt-5">
                      Brand:{item.brand || <Skeleton count={1} />}
                    </p>
                  </div>
                );
              })
            : [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <div className="bg-primary p-10">
                  <span>
                    <Skeleton count={1} />
                  </span>
                  <h3 className="text-xl font-bold">
                    <Skeleton count={1} />
                  </h3>
                  <p className="mt-5">
                    <Skeleton count={1} />
                  </p>
                </div>
              ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutIndex;
