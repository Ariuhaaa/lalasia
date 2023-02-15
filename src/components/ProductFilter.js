import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function ProductFilter() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [productId, setProductId] = useState("");
  const [search, setSearch] = useState("");
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("").then((res) => {
      setData(res.data.result);
      setFilteredData(res.data.result);
    });
  };

  useEffect(() => {
    axios.get("").then((res) => setCatData(res.data.result));
  }, []);

  const onChangeText = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    filterNews(e.target.value);
  };

  const filterNews = (searchParams) => {
    const newArr = data.filter((e) => {
      if (e.productName && e.productName.length > 0) {
        return e.productName.toLowerCase().includes(searchParams.toLowerCase());
      }
    });
    setFilteredData(newArr);
  };

  const handleSort = () => {
    let newArr = [...filteredData];
    newArr.sort(function (a, b) {
      let x = a.productName.toLowerCase();
      let y = b.productName.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setFilteredData(newArr);
  };
  const handleSort2 = () => {
    let newArr = [...filteredData];
    newArr.sort(function (a, b) {
      let x = a.productName.toLowerCase();
      let y = b.productName.toLowerCase();
      return x > y ? -1 : y > x ? 1 : 0;
    });
    setFilteredData(newArr);
  };
  const handleSort3 = () => {
    let newArr = [...filteredData];
    newArr.sort(function (a, b) {
      let x = a.price;
      let y = b.price;
      return x < y ? -1 : y > x ? 1 : 0;
    });
    setFilteredData(newArr);
  };

  const handleSort4 = () => {
    let newArr = [...filteredData];
    newArr.sort(function (a, b) {
      let x = a.price;
      let y = b.price;
      return x > y ? -1 : y > x ? 1 : 0;
    });
    setFilteredData(newArr);
  };
  const FilterCat = (name) => {
    console.log(name);
    let newArr = [];
    data.map((e) => {
      if (name && e.categoryName.toLowerCase() == name.toLowerCase()) {
        newArr.push(e);
      }
    });
    setFilteredData(newArr);
  };

  const handleChange = (id) => {
    filteredData.map((e) => {
      if (e.productId == id) {
        let newObj = { ...e, isliked: !e.isliked };
        fetch("", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newObj),
        })
          .then((res) => res.json())
          .then((data) => {
            getData();
          });
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="input-group bg-white border-white rounded d-flex px-2">
          <span className="fs-4 text-secondary">
            <i class="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-white rounded"
            placeholder="Search"
            onChange={onChangeText}
          />
          <button className="btn text-white bg-success border-success rounded">
            Find now
          </button>
          <button
            className="btn btn-success border rounded"
            data-bs-toggle="collapse"
            data-bs-target="collapseEx"
          >
            Find by category<i class="bi bi-caret-down-fill"></i>
          </button>
        </div>

        <div className="collapse" id="collapseEx">
          <ul>
            <li>
              <button className="btn btn-secondary" onClick={getData}>
                All
              </button>
            </li>

            {catData.map((e) => {
              return (
                <li>
                  <button
                    className="btn btn-secondary"
                    onClick={() => FilterCat(e.categoryName)}
                  >
                    {e.categoryName}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-5 d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <h2>Total Products</h2>
            <span className="bg-white px-2 border-secondary rounded text-primary">
              {filteredData.length}
            </span>
          </div>
          <div>
            <button
              className="btn-light border-white bg-light"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
            >
              <i class="bi bi-list-nested"></i>
              <span className="ps-2">Sort By</span>
            </button>
            <div className="collapse" id="collapseExample">
              <ul className="list-unstyled bg-white">
                <li className="w-100 border-white">
                  <button
                    className="bg-white border-white w-100"
                    onClick={handleSort}
                  >
                    A-Z
                  </button>
                </li>
                <li className="w-100 border-white">
                  <button
                    className="bg-white border-white w-100"
                    onClick={handleSort2}
                  >
                    Z-A
                  </button>
                </li>
                <li className="w-100 ">
                  <button
                    className="bg-white border-white w-100"
                    onClick={handleSort3}
                  >
                    Price Up
                  </button>
                </li>
                <li className="w-100 ">
                  <button
                    className="bg-white border-white w-100"
                    onClick={handleSort4}
                  >
                    Price Down
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly gap-1">
          {filteredData.map((e) => {
            return (
              <div className="card mt-2 col-md-3">
                <div className="card-head">
                  <img src={e.thumbImg} alt="" style={{ width: "100%" }} />
                </div>
                <div className="card-body2 px-3 text-truncate">
                  <span>{e.categoryName}</span>
                  <div className="d-flex justify-content-between">
                    <h2>{e.productName}</h2>
                    {e.isliked ? (
                      <button
                        className="text-danger bg-white border-white fs-4"
                        onClick={() => handleChange(e.productId)}
                      >
                        <i class="bi  bi-heart-fill"></i>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleChange(e.productId)}
                        className="bg-white border-white fs-4"
                      >
                        <i class="bi bi-heart"></i>
                      </button>
                    )}
                  </div>
                  <span>{e.descrption}</span>
                  <div className="d-flex justify-content-between">
                    <h2 className="text-success">${e.price}</h2>
                    <button
                      className="btn btn-white"
                      onClick={() => setProductId(e.productId)}
                    >
                      <a
                        href={`/detail/${productId}`}
                        className="text-decoration-none text-dark"
                      >
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
