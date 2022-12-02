import React, { useEffect, useState } from 'react'
import { resultOpenWorld } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function OpenWorld() {
    const [OpenWorld, setOpenWorld] = useState([]);
    // const test = Browser[0].platform
    async function getData() {
      let openWorld = await resultOpenWorld;
      setOpenWorld(openWorld)
      // console.log(openWorld);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {OpenWorld.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {OpenWorld.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}