import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <div className="container-fluid p-0 m-0">
        <div className="row">

          {/* Left column: image */}
          <div className="col-md-6 p-0 m-0">
            <div className="hero-image"></div>
          </div>

          {/* Right column */}
          <div className="col-md-6 d-flex justify-content-center align-items-center text-center">
            <div className="home-brand">
              <div className="home-logo">MCP</div>

              <div className="home-tagline">
                MY CHRISTIAN PLAYLIST
              </div>

              <p className="home-description p-lg-5">
                <em>
                  A personal record of the songs that shaped your faith—often where you least expected them to.
                </em>
              </p>

              <div className="d-grid gap-4 col-6 mx-auto">
                <Link to="/songs" className="btn btn-success">
                  SONGS
                </Link>

                <Link to="/search" className="btn btn-primary">
                  SEARCH
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
