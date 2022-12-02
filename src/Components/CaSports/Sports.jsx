import React, { useEffect, useState } from 'react'
import { resultSports } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Sports() {
    const [Sports, setSports] = useState([]);
    // const test = Browser[0].platform
    async function getData() {
      let sports = await resultSports;
      setSports(sports)
      // console.log(sports);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Sports.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Sports.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}