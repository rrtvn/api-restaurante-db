//import {NavLink} from 'react-router-dom'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "../Navbar/NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logoutUser } from "../../actions/authActions";
import { authReducer } from "../../reducers/authReducer";

const routes = [
  { label: "Inicio", path: "inicio" }, // TODO: change to /home
  { label: "Carta", path: "carta" },
  { label: "Reserva", path: "reserva" },
  { label: "¿Como Llegar?", path: "comoLlegar" },
  { label: "Agregar Plato", path: "addPlato" }, //SOLO DE MOMENTO PARA TENER ACCESO RAPIDO
  { label: "Login", path: "login" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth);

  

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(logoutUser());
  };
  const dispatch = useDispatch();
  //   const token = useSelector((state) => state.auth.token);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar id="appbar-nav" position="static">
      <Container sx={{ width: "100%", height: "100px" }}>
        <Toolbar disableGutters>
          {/* ---------------------------------- */}
          {/* LOGO WEB */}
          <NavLink to={"/inicio"}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </NavLink>

          {/* BOX WEB ESCRITORIO */}
          <Box
            row
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", height: "100px" },
            }}
          >
            {routes.map((route) => (
              <NavLink
                key={route.id}
                to={route.path}
                sx
                onClick={handleCloseNavMenu}
              >
                <Button sx={{ height: "100%", alignItems: "center" }}>
                  <Typography
                    id={route.path}
                    color={"F1F4F2"}
                    sx={{
                      textAlign: "center",
                      height: "99%",
                      padding: "30px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {route.label}
                  </Typography>
                </Button>
              </NavLink>

              
            ))}

            {isAuthenticated (<NavLink></NavLink>)}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ---------- MOVIL --------------- */}

          {/* BOX WEB MOVIL */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {routes.map((route) => (
                <NavLink key={route} to={route.path}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {route.label}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>

          {/* LOGO MOVIL */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            LOGO MOVIL
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
