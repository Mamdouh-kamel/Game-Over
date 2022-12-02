import React, { useEffect, useState } from 'react'
import { resultBattle } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Battle() {
    const [Battle, setBattle] = useState([]);
    // const test = Browser[0].platform
    async function getData() {
      let battle = await resultBattle;
      setBattle(battle)
      // console.log(battle);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Battle.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Battle.map((val, index) => (<Item data={val} key={index} />))}
          </div>
        </div>:<Loading />
        }
    </>
  )
}