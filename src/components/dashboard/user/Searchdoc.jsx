import React, { useState } from "react";

import algoliaSearch from "algoliasearch/lite";

const searchClient = algoliaSearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

const index = searchClient.initIndex("doctor");

const Searchdoc = () => {
  const [hits, setHits] = useState([]);
  //   const [query, setQuery] = useState('')

  const search = async (query) => {
    const result = await index.search(query);
    console.log(result.hits);
    if (query.length === 0) {
      setHits([]);
    } else {
      setHits(result.hits);
    }
  };

  return (
    <div style={{zIndex: "50", backgroundColor: "gray"}}>
      <input
        type="text"
        onChange={(e) => {
          search(e.target.value);
        }}
      />
      
      {
          hits.map(hit => {
              return (
                  <div style={{border: "1px solid blue", borderRadius:"4px"}}>
                    <h1>{hit.email}</h1>
                    <p>{hit.name}</p>
                    <p>Works at: {' ' + hit.worksAt}</p>
                  </div>
              )
          })
      }
      <a className="btn doc-btn">Share</a>
    </div>
  );
};

export default Searchdoc;
