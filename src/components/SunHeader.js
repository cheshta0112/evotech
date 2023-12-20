import React from "react";

export default function SunHeader() {
  return (
    <div className="container-fluid bg-white  py-2">
      <div className="row ">
        <div className="col-lg-4 col-12 justify-content-start">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h6>Dashboard</h6>
            </div>
            <div className="col-lg-6">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#FBEEBC", color: "#E99E01" }}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>

        <div className="col-lg-6 pe-0">
          <div className="container-fluid pe-0">
            <div className="row justify-content-end pe-0">
              <div className="col-lg-2">
                <button type="submit" className="btn btn-light text-primary">
                  Today
                </button>
              </div>
              <div className="col-lg-2">
                <button type="submit" className="btn  text-secondary">
                  Month
                </button>
              </div>
              <div className="col-lg-2">
                <button type="submit" className="btn  text-secondary">
                  Year
                </button>
              </div>
              <div className="col-lg-2">
                <button type="submit" className="btn btn-light text-secondary">
                  Actions
                </button>
              </div>
              <div className="col-lg-2">
                <button href="#" className="btn">
                  <img
                    src="/images/File Plus icon.png"
                    style={{ height: 32, marginTop: -5 }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
