import { CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductCard from "../components/card";
import { mockedProducts } from "../products";
import carhood from "../assets/carhood.jpg";
import iceCream_logo from "../assets/icecream_logo.png";

function Main() {
  return (
    <div>
      <main>
        <div
          className="IntroText"
          style={{
            backgroundColor: "#333",
            display: "flex",
            height: "10vh",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              color: "whitesmoke",
              fontFamily: "Century Gothic",
              paddingTop: "1.5rem",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Hos VanillaTuning så kan du serva och optimera prestandan i din
            bil..
          </h3>
        </div>
        <div
          className="ServiceBox"
          id="services"
          style={{
            backgroundColor: "#06546b",
            display: "flex",
            padding: "2rem",
          }}
        >
          <h2 style={{ color: "whitesmoke", fontFamily: "Century Gothic" }}>
            {" "}
            Tjänster
          </h2>
          <Container>
            <Row>
              <Col>
                <div style={productCards}>
                  {mockedProducts.map((product) => (
                    <ProductCard product={product} />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="AboutText"
          id="about"
          style={{
            backgroundColor: "#333",
            display: "flex",

            height: "30vh",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <p style={textStyle}>
            <h2> Om oss</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quo
            corporis. Consequatur dicta quibusdam magnam rerum necessitatibus
            nemo ratione delectus adipisci amet, quis a debitis aspernatur
            numquam recusandae mollitia eaque! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem, quo corporis. Consequatur dicta
            quibusdam magnam rerum necessitatibus nemo ratione delectus adipisci
            amet, quis a debitis aspernatur numquam recusandae mollitia eaque!
          </p>
          <img src={iceCream_logo} alt="icecream logo" />
        </div>
        <div
          className="ImageBox"
          style={{
            backgroundColor: "#06546b",
            display: "flex",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          <img src={carhood} alt="carhood" height={"400px"} />
        </div>
      </main>
    </div>
  );
}

export default Main;

const productCards: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
  paddingTop: "3rem",
};

const textStyle: CSSProperties = {
  color: "whitesmoke",
  fontWeight: "600",
  fontSize: "1.2rem",
  fontFamily: "Century Gothic",
  padding: "2rem",
};
