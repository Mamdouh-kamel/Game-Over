import React, { useEffect, useState } from 'react'
import { resultPc } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Platforms() {

  const [Pc, setPc] = useState([]);
  const [Visible, setVisible] = useState(20);
  const moreGame = () => setVisible((prev)=> prev + 20);

  async function getData() {
    let pc = await resultPc;
    setPc(pc)
    // console.log(pc);
  }
  useEffect(() => {
    getData()
  }, [])
  


  return (
    <>
        
      {Pc.length > 0 ? <div className="container m-top my-5">
        <div className="row g-4 mt-3">
          {Pc.slice(0, Visible).map((valu, index) => (<Item data={valu} key={index} />))}
        </div>
        <div className='text-center mt-5'>
            <button onClick={moreGame} className='btn btn-dark text-warning border border-warning'>MORE GAMES</button>
          </div>
      </div>:<Loading />
      }
    </>
  ) 
}
