import React, { useEffect, useState } from 'react'
import { resultFlight } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Flight() {
    const [Flight, setFlight] = useState([]);
    // const test = Browser[0].platform
    async function getData() {
      let flight = await resultFlight;
      setFlight(flight)
      // console.log(flight);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Flight.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Flight.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}