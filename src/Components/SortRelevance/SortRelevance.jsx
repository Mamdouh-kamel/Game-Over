import React, { useEffect, useState } from 'react'
import { resultRelevance } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function SortRelevance() {
    const [Relevance, setRelevance] = useState([]);
    async function getData() {
      let relevance = await resultRelevance;
      setRelevance(relevance)
      // console.log(relevance);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
        {Relevance.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Relevance.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}
