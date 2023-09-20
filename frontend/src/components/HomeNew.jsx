import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBarScroll from "/src/components/NavBarScroll.jsx";
import {Link} from "react-router-dom"

export default function HomeNew() {

  const [places, setPlaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery);

  const URL =
    "https://cdn.contentful.com/spaces/uagdxbu69gen/environments/master/entries?access_token=84S6RAOLTOj6erX8CIihN39tOHjBVQyWEuhqbyj9tbk&content_type=travellingDestinations";

  const filterPlaces = () => {
    if (searchQuery === "") {
      axios.get(URL).then((response) => setPlaces(response.data.items));
    } else {
      axios
        .get(URL)
        .then((response) =>
          setPlaces(
            response.data.items.filter((place) =>
              place.fields.country
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
          )
        );
    }
  };

  // Effekt, der auf Änderungen des searchQuery reagiert
  useEffect(() => {
    filterPlaces();
  }, [searchQuery]);

  /* Zugriff auf einzelne Places-Einträge
  console.log(places[0].fields); */

  return (
    <>
      <NavBarScroll
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
      />
      <div className="test_outer">
        {places.map((place, index) => (
          <div
            className="test"
            key={index}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${place.fields.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="test_inner">

              <Link to={`/blogDetails/${place.sys.id}`}>
                <h1>{place.fields.placeName}</h1>
              </Link>

              <h3>{place.fields.country}</h3>
              <p>Description: {place.fields.description}</p>
              <p>Posted at: {place.sys.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

