import React from "react";

export default function Bar() {
  const data = [
    {
      id: 1,
      date: "1 Aug",
      height1: 150,
      height2: 120,
    },
    {
      id: 2,
      date: "8 Aug",
      height1: 170,
      height2: 140,
    },
    {
      id: 3,
      date: "51 Aug",
      height1: 120,
      height2: 90,
    },
    {
      id: 4,
      date: "22 Aug",
      height1: 130,
      height2: 100,
    },
    {
      id: 5,
      date: "29 Aug",
      height1: 150,
      height2: 120,
    },
    {
      id: 6,
      date: "5 Sep",
      height1: 150,
      height2: 120,
    },
  ];
  return (
    <div className="container-fluid px-5 mt-3 pb-1">
      <div className="container bg-white py-4 mx-4 pb-1 ">
        <div className="row">
          <div className="col-lg-6 text-start">
            <h5>Recent Stats</h5>
            <p style={{ fontWeight: "600", color: "lightgrey" }}>
              More than 400+ new members
            </p>
          </div>
          <div className="col-lg-6 text-end">
            <button type="submit" className="btn">
              Month
            </button>
            <button type="submit" className="btn">
              Week
            </button>
            <button type="submit" className="btn btn-secondary">
              Day
            </button>
          </div>
        </div>
        <div
          className="row"
          style={{
            position: "relative",
            height: 300,
          }}
        >
          {data.map((item, index) => (
            <div className="col-lg-2 text-center">
              <div
                className="row mb-2 "
                style={{ position: "absolute", bottom: 30, marginLeft: 40 }}
              >
                <div className="col-lg-4 "></div>
                <div
                  className="col-lg-3 bg-warning"
                  style={{ height: `${item.height1}px`, borderRadius: 7 }}
                ></div>
                <div
                  className="col-lg-3 bg-light"
                  style={{
                    height: `${item.height2}px`,
                    marginTop: 30,
                    borderRadius: 7,
                  }}
                ></div>
                <div className="col-lg-2"></div>
              </div>
              <h6 style={{ position: "absolute", bottom: 0, marginLeft: 70 }}>
                {item.date}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
