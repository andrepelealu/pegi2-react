import React, {useState,useEffect} from 'react'
import SecTitle from './style'
import Border from './style'
import axios from 'axios'
import { useFetch } from "./hooks";

function Recommend(){

  const [data, loading] = useFetch(
    //https://jsonplaceholder.typicode.com/photos?albumId=1
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
      console.log(data);
  return(

    <div>
      <div className="row">
        <SecTitle><h5>Rekomendasi Tempat Wisata</h5></SecTitle>

          <>

            {loading ? (

              <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"/>
            ) : (
              <ul>
                {data.map(({ id, title, url }) => (
                  <li key={`photo-${id}`}>
                    <div className="col s4">
                      <div className="card">
                        <div className="card-image">
                          <img alt={title} src={url} />
                        </div>

                        <div className="card-content">
                          <span className="card-title">{title}</span>

                          <p>I am a very simple card. I am good at containing small bits of information.
                          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className  ="card-action">
                          <a href="#">This is a link</a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        );

      </div>
    </div>
  )
}

export default Recommend
