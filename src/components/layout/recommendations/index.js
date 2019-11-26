import React from 'react'
import SecTitle from './style'
import { useFetch } from "./hooks";

function Recommend(){
  const [data, loading] = useFetch(
    "http://localhost:4000/get"
  );
  return(

    <div>
      <div className="row">
        <SecTitle><h5>Rekomendasi Tempat Wisata</h5></SecTitle>

          <>

            {loading ? (

              <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="loading"/>
            ) : (
              <ul>
                {data.map(({ id, title, foto, deskripsi,webpage }) => (
                  <li key={`photo-${id}`}>
                    <div className="col s4">
                      <div className="card">
                        <div className="card-image">
                          <img alt={title} src={foto} />
                        </div>

                        <div className="card-content">
                          <span className="card-title"><b>{title}</b></span>

                          <p>{deskripsi}</p>
                        </div>
                        <div className  ="card-action">
                          <a href={webpage}>Kunjungi Website</a>
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
