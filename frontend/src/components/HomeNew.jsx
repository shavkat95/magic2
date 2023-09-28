import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import backend_url from "/env.js";

export default function HomeNew() {
  /* Zugriff auf einzelne Places-Einträge
  console.log(places[0].fields); */

  const [places, setPlaces] = useState([]);

  const { search } = useParams();
  console.log('search: '+search);

  // const URL =
  //   "https://cdn.contentful.com/spaces/uagdxbu69gen/environments/master/entries?access_token=84S6RAOLTOj6erX8CIihN39tOHjBVQyWEuhqbyj9tbk&content_type=travellingDestinations";

  // filterPlaces

  const work_places = (data) => {
    let result = data;
    let i = 0;
    for (let place of result) {
      result[i].fields = {};
      result[i].fields.img = place.images.split(',')[0]
      if (result[i].fields.img.startsWith('backend')){
        result[i].fields.img = result[i].fields.img.replace('backend', backend_url)
      }
      // console.log(result[i]);
      i++;
    }
    return result;
  }

  useEffect(()=>{
    console.log('search: '+search);
    if (!search) {
      console.log('making request to: '+backend_url);
      axios
        .get(backend_url+'/all')
        .then((response) => {
          console.log('\n setting places ...');
          setPlaces(work_places(response.data));
        });
    } else {
      axios
        .get(backend_url+'/search/'+search)
        .then((response) => setPlaces(response.data.items));
    }
  },[])


  return (
    <>
      <div className="test_outer">
        {places ? places.map((place, index) => (
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
              <Link to={`/blogDetails/${place.id}`}>
                <h1>{place.name}</h1>
              </Link>

              <h3>{place.country}</h3>
              <p>Description: {place.description}</p>
              <p>Posted at: {place.created_at}</p>
            </div>
          </div>
        ))
        : 
        []}
        
      </div>
    </>
  );
}
