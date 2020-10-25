import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { GlobalContext } from "../conext/GlobalState";

const NavBar = () => {
  const { logout } = useContext(GlobalContext);

  return (
    <div>
      <AppBar position="static" style={{ background: "#181818" }}>
        <Toolbar className="bar">
          <Link to="/addTrans" style={{ textDecoration: "none" }}>
            <Button
              style={{
                background: "transparent",
                color: "white",
              }}
            >
              Add Transaction
            </Button>
          </Link>

          <Link to="/history" style={{ textDecoration: "none" }}>
            <Button
              style={{
                background: "#transparent",
                color: "white",
              }}
            >
              Transaction History
            </Button>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              onClick={logout}
              variant="contained"
              color="secondary"
              style={{
                color: "white",
              }}
            >
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
