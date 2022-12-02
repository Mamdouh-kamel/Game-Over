import React, { useEffect, useState } from 'react'
import { resultReleaseDate } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function SortReleaseDate() {

    const [ReleaseDate, setReleaseDate] = useState([]);
    async function getData() {
      let releaseData = await resultReleaseDate;
      setReleaseDate(releaseData)
      // console.log(releaseData);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {ReleaseDate.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {ReleaseDate.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}
