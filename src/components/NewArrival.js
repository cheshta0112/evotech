import React from "react";

export default function NewArrival() {
  const data = [
    {
      id: 1,
      icon: "/images/184-plurk.png",
      title: "Sant Outstanding",
      rupee: "$2,000,000",
      bgColor: "#F4D3FA",
      color: "#9E0EB9",
      status: "Approved",
    },
    {
      id: 2,
      icon: "/images/Group.png",
      title: "Telegram Application",
      rupee: "$4,600,000",
      bgColor: "#FBEEBC",
      color: "#E99E01",
      status: "In Progress",
    },
    {
      id: 3,
      icon: "/images/194-puzzle.png",
      rupee: "560,000",
      title: "Cisco Management",
      bgColor: "#D0F8FD",
      color: "#10A6B7",
      status: "Success",
    },
    {
      id: 4,
      icon: "/images/182-bebo.png",
      title: "HR Management",
      rupee: "$57000",
      bgColor: "#FDC9C9",
      color: "red",
      status: "Rejected",
    },
    {
      id: 5,
      icon: "/images/Group (1).png",
      title: "KTR Mobile Management",
      rupee: "$45,200,000",
      bgColor: "#FBEEBC",
      color: "#E99E01",
      status: "In Progress",
    },
  ];

  return (
    <div className="container-fluid px-5 mt-3 pb-1">
      <div className="container bg-white py-4 mx-4 pb-1">
        <div className="row ">
          <div className="col-lg-6 text-start">
            <h5>New Arrivals</h5>
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
        {data.map((item, index) => (
          <div className="row mt-3" key={index}>
            <div className="col-lg-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-2">
                    <img src={item.icon} />
                  </div>
                  <div className="col-lg-10 text-start">
                    <h5 style={{ fontSize: 17, fontWeight: "600" }}>
                      {item.title}
                    </h5>
                    <p>
                      <b>FFP:</b>{" "}
                      <span style={{ color: "lightgray" }}>bprow@bnc.cc</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 pe-0">
              <div className="row">
                <div className="col-lg-4 text-end">
                  <a style={{ textDecoration: "none" }}>
                    <h5 style={{ fontSize: 17, fontWeight: "600" }}>
                      {item.rupee}
                    </h5>
                    <h6 style={{ fontWeight: "600", color: "lightgray" }}>
                      Paid
                    </h6>
                  </a>
                </div>
                <div className="col-lg-4">
                  <a
                    href="#"
                    className="btn py-1"
                    style={{
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: "500",
                      backgroundColor: `${item.bgColor}`,
                      color: `${item.color}`,
                      borderRadius: 5,
                    }}
                  >
                    {item.status}
                  </a>
                </div>
                <div className="col-lg-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4">
                        <a
                          href="#"
                          className="btn py-0"
                          style={{
                            textDecoration: "none",
                            fontSize: 17,

                            color: "#3B91F3",
                            borderRadius: 5,
                          }}
                        >
                          <img src="/images/Button Settings.png" />
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a
                          href="#"
                          className="btn py-0"
                          style={{
                            textDecoration: "none",
                            fontSize: 17,

                            color: "#3B91F3",
                            borderRadius: 5,
                          }}
                        >
                          <img src="/images/Button Edit.png" />
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a
                          href="#"
                          className="btn py-0"
                          style={{
                            textDecoration: "none",
                            fontSize: 17,

                            color: "#3B91F3",
                            borderRadius: 5,
                          }}
                        >
                          <img src="/images/Button Trash.png" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
