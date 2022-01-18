import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const resData = await res.json();
    console.log(resData.statewise);
    setData(resData.statewise);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mt-5 main">
        <h1 className="text-center">INDIA COVID-19 Dashboard</h1>
      </div>
      <div className="container tablecentent">
        <table className="table table-hover table-striped">
          <thead>
            <tr className="table-dark">
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr className="table-light">
                  <td>{data.state}</td>
                  <td>{data.confirmed}</td>
                  <td>{data.recovered}</td>
                  <td>{data.deaths}</td>
                  <td>{data.active}</td>
                  <td>{data.lastupdatedtime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
