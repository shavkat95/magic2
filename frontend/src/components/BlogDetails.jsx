import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link, useParams } from "react-router-dom";

function BlogDetails() {
  const [singleBlogPosts, setSingleBlogPosts] = useState([]);
  const client = createClient({
    space: "uagdxbu69gen",
    accessToken: "84S6RAOLTOj6erX8CIihN39tOHjBVQyWEuhqbyj9tbk",
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setSingleBlogPosts(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getEntryById();
  }, []);
  console.log(singleBlogPosts);

  return (
    <div>
      <div>
        <div>
          <div
            className="blog-intro"
            style={{
              /* backgroundImage: `url(${place.fields.img})`, */
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${singleBlogPosts?.fields?.largeImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "600px",
              backgroundPosition: "center",
            }}
          >
            <h1>{singleBlogPosts?.fields?.placeName}</h1>
            <div className="first-para">
              <div>
                <p>Author: {singleBlogPosts?.fields?.author}</p>
              </div>
              <div>
                <p>
                  Publishing date: {singleBlogPosts?.fields?.publishingDate}
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
            <p>Ranking: {singleBlogPosts?.fields?.ranking}</p>
            <p>{singleBlogPosts?.fields?.longIntroduction}</p>
            <h2>Things to visit</h2>
            <p>{singleBlogPosts?.fields?.thingsToVisitRecommended}</p>
            <h2>Food must try</h2>
            <p>{singleBlogPosts?.fields?.foodMustTryRecommended}</p>
            <h2>How to get around</h2>
            <p>{singleBlogPosts?.fields?.howToGetAround}</p>
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
