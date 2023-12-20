import React from "react";

export default function Tabs() {
  const TabData = [
    {
      icon: "/images/Library11.png",
      alt: "library_icon",
      text: "SaaS Application",
    },
    {
      icon: "/images/layout-4-blocks.png",
      alt: "layout_icon",
      text: "Main Categories",
    },
    {
      icon: "/images/movie-lane-2.png",
      alt: "video_icon",
      text: "Video Tutorials",
    },
    {
      icon: "/images/equalizer.png",
      alt: "equalizer_icon",
      text: "Sales Statistics",
    },
    {
      icon: "/images/Shield-check.png",
      alt: "shield_icon",
      text: "ARC Security",
    },
  ];
  return (
    <div className="container-fluid px-0">
      <div className="row py-4 d-flex justify-content-center">
        {TabData.map((data, i) => (
          <div className="col-lg-2  px-1 mx-2">
            <div
              class="card "
              style={{
                height: 200,
                borderRadius: 6,
                backgroundColor: i == 2 ? "#50CD89" : " ",
              }}
            >
              <div className="p-4 ">
                <img
                  src={data.icon}
                  alt="..."
                  style={{ height: 80, width: 80 }}
                />
              </div>

              <div class="card-body px-4">
                <h5 class="card-title ">{data.text}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
