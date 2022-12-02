import React, { useEffect, useState } from 'react'
import { resultShooter } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Shooter() {
    const [Shooter, setShooter] = useState([]);
    // const test = Browser[0].platform
    async function getData() {
      let shooter = await resultShooter;
      setShooter(shooter)
      // console.log(shooter);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Shooter.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Shooter.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}