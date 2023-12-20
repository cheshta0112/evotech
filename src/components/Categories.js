import React from "react";

export default function Categories() {
  const salesItems = [
    {
      icon: "/images/Icon.png",
      alt: "gift_icon",
      text: "Briviba SaaS",
      description: "PHP, SQLite, Artisan CLIмм",
    },
    {
      icon: "/images/Icon (1).png",
      alt: "layout_icon",
      text: "Briviba SaaS",
      description: "PHP, SQLite, Artisan CLIмм",
    },
    {
      icon: "/images/Icon (2).png",
      alt: "layout_icon",
      text: "Briviba SaaS",
      description: "PHP, SQLite, Artisan CLIмм",
    },
    {
      icon: "/images/Icon (3).png",
      alt: "flower_icon",
      text: "Briviba SaaS",
      description: "PHP, SQLite, Artisan CLIмм",
    },
  ];

  return (
    <div className="container">
      <div className="row ms-4">
        <div className="col-lg-6">
          <div class="card" style={{ paddingBottom: 100 }}>
            <div
              className="card bg-danger  "
              style={{ paddingBottom: 60, paddingTop: 30 }}
            >
              <div class="card-body ">
                <div className="row " style={{ marginTop: -20 }}>
                  <div className="col-lg-6 text-start">
                    <h5 class="card-title text-white ">Categories</h5>
                  </div>
                  <div className="col-lg-6 text-end">
                    <div class="dropdown">
                      <button
                        class="btn btn-outline-light text-white dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          backgroundColor: "rgb(255, 102, 102)",

                          borderRadius: "6px",
                        }}
                      >
                        Export
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <img
                  src="/images/Vector 6.png"
                  class="card-img-top"
                  alt="..."
                  style={{ paddingTop: 30 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title ps-4 text-start">Sales Progress</h5>
            </div>
            {salesItems.map((item, index) => (
              <div className="row mt-1" key={index}>
                <div className="col-lg-12">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-2">
                        <img src={item.icon} />
                      </div>
                      <div className="col-lg-10 text-start">
                        <h5 style={{ fontSize: 17, fontWeight: "600" }}>
                          {item.text}
                        </h5>
                        <p>
                          <span style={{ color: "lightgray" }}>
                            {item.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
