import React, { Component } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

class Nav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <NavbarBrand href="#home" className="fw-bold">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAb1BMVEUAkAD////6+/rl7OWAsIA4ljjC1cIWkRZ9r32gwaCqxqrH2MelxKX1+PW4z7gikyI0ljReol4qlCrZ5NlHmkfv8+8NkQ1kpGSOt45rp2t2rHbT4NPL28tCmUKJtYno7uhWn1aWu5ZNnE1wqXBZoFkFAZ/hAAAESUlEQVR4nO2c67aqIBRGUbuX1c4up51ddue8/zMec1uaLiCTYDHGN/9aDmYFn8AiIQAAAAAAAAAAAAAAAACAj7GbTr9dt8EE1ygI4vnadTO6MwhuRD+u29GVXpyLBGG6d92UTqyS4M5msnTdmg5MggrJyXVz3ma3qYoE4fTLdYve5BDU2MxWrtv0Dj9hXSQIUg97yvrc9AiCsetmtWdAeXgoMiJ+WNnQZeWntTyNOzJ7PFdVIqRCPLLhsU/ID7ENZUMn5PW5FQ+yc7bj0dBahBRENp4eTXhE/fvdUupy+MeCx86AR/h4CKEiJAsRCx6LRgq/weB+tyv5qWxsPKH8jbt7nC/3u83J6zMLHqLXecCqZN2I/FQSK89ZBkQOi+JeSzpC7Ezdu4uUDZ2R161EiAkRDhFiQoRDhNRFotmkPY/FBXcR0hAZ6F8uZx1RHlYiJMeYiMMIyTEl4jJCcgyJLFxGSI4hEacRkmNG5MtphOSYEVFHyEL5XkMYEfmjjJCelZ5iQkQdIevESribEFFHyDzomWqsCgMi33SEFD0jm7lZWQrqLiJZyCo6RjaVDj0RUUfIOPBFRB0hl7M3IlPK4xEhtwVtP0ToCJkWV0+hLyJHZYQs86teiKgj5HdB2wcRSYQUs5B97IuIZBZyb3ixGuuBiCZCQl9E9BHiiYg+QvwQUUdIeWPuIupZSL8cB7iLqCOkMg4wF1FHSLX/8BbRLWR5IzImf1jlQpYvIv/oCDk+XuCLiDpCBDeR41byLvVC1g1WIpPzgW5DX78XwknktgUVz4/Em17YC2Ekcvntz1GzRlQSIcPqaxiJ3JsSDi7PbxmSVR+1vRA+IpX+fH4uDNdFSA4bkadHwjDdlVe0EcJLpNafN7NHD9BGCCuRZh3BoegDJ+UshJtIn3gk/K3WX764nc5EhK6wTHpiRRf1NrfTeYjIqtHilHx4p7bTWYjQQSGH2k5nIUIvV8mhttM5iNDLVXLI7XQOIt/tSrjoiiwOIkN6ZJLRiBA2ImI1b1FDK6nIYiGS/bpeH7ckFVlMRMRw9mKPf56F8BMRYpe+0udDWZ0JH5FsqvtC+b904YWTiLgMdF/KWVqRxUokmyaSz7ol8hNgzETEUTkSHyQ9XfATEWJEP/De2ChORvMTEauJbCSeKO7LUCSbnpAli+qiXpYiQoyJkVh9tJCpiPiaNkZidVEvV5EsHmsjsaaol6+IuA6qI7HuXAhjESFOlZFYdy6EtYjoT+5fivZcCG+RcqKiPRfCXaSYqOjPhbAXEWKfxon+wJEHImL7TW3H1fBB5CUg8i4Q0eBUZLrdDs2w3aYuReKzKaJz7FLkQ0AEIhDRiFg5h3htuc/2BvJ1VaO03flsj60z7XQVmTnsHaH+rInNo+Dzz3X40KaHED9J9BkS6/9luux/Ag//0hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMMR/C2lNcmMlc7kAAAAASUVORK5CYII="
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Todo Application
          </NavbarBrand>
        </Container>
      </Navbar>
    );
  }
}

export default Nav;
