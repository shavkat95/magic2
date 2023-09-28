import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import backend_url from "/env.js";

function BlogDetails() {
  const [singleBlogPost, setSingleBlogPost] = useState([]);

  const { id } = useParams();
  console.log(id);

  // useEffect(() => {
  //   const getEntryById = async () => {
  //     try {
  //       await client.getEntry(id).then((entries) => {
  //         console.log(entries);
  //         setSingleBlogPost(entries);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getEntryById();
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(backend_url + "/byID/" + id.toString())
  //     .then((response) => setSingleBlogPost(response.data));
  // }, []);

  const work_places = (data) => {
    let result = [data];
    let i = 0;
    for (let place of result) {
      result[i].fields = {};
      result[i].fields.img = place.images.split(",")[0];
      if (result[i].fields.img.startsWith("backend")) {
        result[i].fields.img = result[i].fields.img.replace(
          "backend",
          backend_url
        );
      }
      // console.log(result[i]);
      i++;
    }
    return result;
  };

  useEffect(() => {
    console.log("making request to: " + backend_url);
    axios.get(backend_url + "/byID/" + id.toString()).then((response) => {
      console.log("\n setting places ...");
      setSingleBlogPost(work_places(response.data)[0]);
    });
  }, []);

  return (
    <div>
      <div>
        <div>
          <div
            className="blog-intro"
            style={{
              /* backgroundImage: `url(${place.fields.img})`, */
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${singleBlogPost?.large_image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "600px",
              backgroundPosition: "center",
            }}
          >
            <h1>{singleBlogPost?.name}</h1>
            <div className="first-para">
              <div>
                <p>Author: {singleBlogPost?.author}</p>
              </div>
              <div>
                <p>
                  Publishing date: {singleBlogPost?.created_at}
                </p>
              </div>
            </div>
          </div>
          <div
            className="blog-details"
            style={{
              textAlign: "justify",
              marginLeft: "20%",
              marginRight: "20%",
              marginBottom: "100px",
            }}
          >
            <p>Ranking: {singleBlogPost?.ranking}</p>
            <p>{singleBlogPost?.long_introduction}</p>
            <h2>Things to visit</h2>
            <p>{singleBlogPost?.things_to_visit}</p>
            <h2>Food must try</h2>
            <p>{singleBlogPost?.food_must_try}</p>
            <h2>How to get around</h2>
            <p>{singleBlogPost?.how_to_get_around}</p>
          </div>
        </div>
      </div>
      <div className="come-back">
        <Link to="/">Come back to Blog list</Link>
      </div>
    </div>
  );
}

export default BlogDetails;
