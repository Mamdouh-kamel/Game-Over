import React, { useEffect, useState } from 'react'
import { resultPopularity } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function SortPopularity() {
    const [Popularity, setPopularity] = useState([]);
    async function getData() {
      let alphapet = await resultPopularity;
      setPopularity(alphapet)
      // console.log(alphapet);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Popularity.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Popularity.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}
