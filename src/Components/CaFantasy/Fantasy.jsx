import React, { useEffect, useState } from 'react'
import { resultFantasy } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Fantasy() {
    const [Fantasy, setFantasy] = useState([]);
    // const test = Browser[0].platform
    async function getData() {
      let fantasy = await resultFantasy;
      setFantasy(fantasy)
      // console.log(fantasy);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Fantasy.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Fantasy.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}
