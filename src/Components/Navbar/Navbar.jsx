import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



export const NavbarIs = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="dark"
      >
        <Container className="navbar">
          <Navbar.Brand href="/"><h1>Brand-Hub</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <div style={{
              "display": "flex",
              "gap":"10px",

            }}>
              <Link to="/tshirt" style={{
                "color":"white",
                "textDecoration": "none"
              }}>Tshirt</Link>
              <Link to="/shirt" style={{
                "color":"white",
                "textDecoration": "none"
              }}>Shirt</Link>
              <Link to="/pant" style={{
                "color":"white",
                "textDecoration": "none"
              }}>Pant</Link>
              <Link to="/blazer" style={{
                "color":"white",
                "textDecoration": "none"
              }}>Blazers</Link>
              </div>
            </Nav>
            <Nav>
              <Nav.Link href="#f8ec00ts"></Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
              ></Nav.Link>
              <div className="cartIcon">
                <Link to="/cart">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png"
                    alt=""
                    height="100%"
                    width="100%"
                  />
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
          <Link to="/signup" >
             <button>SignUp</button>
            </Link>
            <Link to="/signin" >
            <button>SignIn</button>
            </Link>
      </Navbar>
      
    </div>
  );
};
