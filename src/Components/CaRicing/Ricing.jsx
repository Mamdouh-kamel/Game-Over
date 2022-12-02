import React, { useEffect, useState } from 'react'
import { resultRacing } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Racing() {
    const [Racing, setRacing] = useState([]);
    async function getData() {
      let racing = await resultRacing;
      setRacing(racing)
      // console.log(racing);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Racing.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Racing.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}