import React, { useEffect, useState } from "react";
import { Layout, CardContent, Loadingcomponent } from "../../components";
// import { useParams } from "react-router-dom";
import { getImage } from "../../utils/search";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Search = () => {
  const text = useSelector((state) => state.search.data);
  const [popular, setPopular] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const textSearch = text;
    const perpage = 15;
    const page = 1;
    getImage(textSearch, perpage, page)
      .then((res) => {
        setLoad(true);
        setPopular(res.data.images);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <Layout>
      {load ? (
        <>
          <h1 style={{ marginLeft: "15%", marginBottom: "3rem" }}>
            Search by : {text}
          </h1>
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
              ))}
            </div>
          </Container>
        </>
      ) : (
        <Loadingcomponent />
      )}
    </Layout>
  );
};

export default Search;
