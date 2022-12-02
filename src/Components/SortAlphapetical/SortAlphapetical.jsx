import React, { useEffect, useState } from 'react'
import { resultAlphapet } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function SortAlphapetical() {

    const [Alphapet, setAlphapet] = useState([]);
    async function getData() {
      let alphapet = await resultAlphapet;
      setAlphapet(alphapet)
      // console.log(alphapet);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Alphapet.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Alphapet.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}
