import React, { useState, useEffect } from "react";
import { getAll } from "../../utils/app";
import { Container } from "react-bootstrap";
import { Layout, CardContent } from "../../components";

export default function Home() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getAll()
      .then((res) => {
        setPopular(res.data.images);
      })
      .catch((error) => {
        console.log(error);
      });
    // };
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <div className="row w-100">
            {popular.map((populars, idx) => (
              <div className="col-md" key={idx}>
                <CardContent
                  link={populars.link}
                  title={populars.title}
                  owner={populars.owner}
                  images={populars.image}
                />
              </div>
              // <div key={idx}>
              //   <p>{populars.title}</p>
              //   <img src={populars.image} alt="img" />
              // </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
