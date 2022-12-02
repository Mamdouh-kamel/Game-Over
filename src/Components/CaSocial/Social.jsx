import React, { useEffect, useState } from 'react'
import { resultSocial } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Social() {
    const [Social, setSocial] = useState([]);
    // const test = Browser[0].platform
    async function getData() {
      let social = await resultSocial;
      setSocial(social)
      // console.log(social);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Social.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Social.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}