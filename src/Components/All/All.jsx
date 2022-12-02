import React, { useEffect, useState } from 'react'
import { resultAll } from '../../Api';
import Item from '../Item/Item';

export default function All() {

  const [All, setAll] = useState([]);
  const [Visible, setVisible] = useState(20);
  const moreGame = () => setVisible((prev)=> prev + 20);

  async function getData() {
    let all = await resultAll
    setAll(all);
    // console.log(all);
  }
  // console.log(All);

  useEffect(() => {
    getData()
  }, [])




  return (
    <>
      {All.length > 0 ? <div className="container m-top my-5">
        <div className="row g-4 mt-3">
          {All.slice(0, Visible).map((value, index) => (<Item data={value} key={index} />))}
          <div className='text-center mt-5'>
            <button onClick={moreGame} className='btn btn-dark text-warning border border-warning'>
              MORE GAMES <i className="fas fa-angle-right"></i></button>
          </div>
        </div>
      </div> : ''
      }
    </>
  )
}
