import React, { useEffect, useState } from 'react'
import { resultActionRbj } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function ActionRbj() {

  const [ActionRbj, setActionRbj] = useState([]);
  const [Visible, setVisible] = useState(20);
  const moreGame = () => setVisible((prev) => prev + 20);

  async function getData() {
    let actionRbj = await resultActionRbj;
    setActionRbj(actionRbj)
    // console.log(actionRbj);
  }


  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {ActionRbj.length > 0 ? <div className="container m-top my-5">
        <div className="row g-4 mt-3">
          {ActionRbj.slice(0, Visible).map((val, index) => (<Item data={val} key={index} />))}
        </div>
        <div className='text-center mt-5'>
          <button onClick={moreGame} className='btn btn-dark text-warning border border-warning'>MORE GAMES</button>
        </div>
      </div> : <Loading />
      }
    </>
  )
}
