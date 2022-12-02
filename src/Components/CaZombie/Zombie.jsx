import React, { useEffect, useState } from 'react'
import { resultZombie } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Zombie() {
    const [Zombie, setZombie] = useState([]);
    // const test = Browser[0].platform
    async function getData() {
      let zombie = await resultZombie;
      setZombie(zombie)
      // console.log(zombie);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Zombie.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Zombie.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}