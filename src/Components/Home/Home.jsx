import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { resultHome } from '../../Api';
import Loading from '../Loading/Loading';
import Styles from './Home.module.css'
export default function Home() {
  


  const [Home, setHome] = useState([]);

  async function getData() {
    let home = await resultHome;
    setHome(home);
    
  }
  // console.log(Home);


  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      {Home.length>0 ?<><div className={`container-fluid pt-4 my-5 ${Styles.home}`}>
        <div className={`row text-center border-bottom border-opacity-25 border-warning shadow`}>
          <div className="content my-5">
            <h1 className='text-white-50'>Find & track the best <span className='text-warning'>free-to-play</span> games!</h1>
            <p className='text-muted fs-5 fw-light mb-3'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <Link to={`/all`}><button className='btn btn-outline-warning mb-3'>Browse Games</button></Link>
          </div>
        </div>
      </div>
        <div className="container my-5">
          <div className="row g-4">
            <h2 className='text-white-50 mb-4'><i className='fas fa-robot mr-2'> </i> Personalized Recommendations</h2>
            {Home.slice(0, 3).map((value, idx) => {
              return (
                <div  key={idx} className='col-md-4'>
                  <Link className='text-decoration-none' to={`/details/${value.id}`}>
                  <div className="card bg-dark shadow border border-warning border-opacity-25">
                    <img src={value.thumbnail} className="card-img-top" alt="" />
                    <div className="card-body p-3">
                      <div className='d-flex justify-content-between align-items-center'>
                        <h4 className="card-title text-white-50 text-truncate">{value.title}</h4>
                        <span className='badge text-bg-warning text-white text-uppercase'>free</span>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              )
            }

            )}
          </div>
        </div></>:<Loading />}

    </>
  )
}
