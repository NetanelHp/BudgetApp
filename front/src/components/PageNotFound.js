import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>
        Redirect to
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{ color: "blueviolet", cursor: "pointer" }}>
            {" "}
            login{" "}
          </span>
        </Link>
        page
      </p>
    </div>
  );
};

export default PageNotFound;
