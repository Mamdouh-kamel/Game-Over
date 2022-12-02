import React, { useEffect, useState } from 'react'
import { resultBrowser } from '../../Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function PlatformsB() {


    const [Browser, setBrowser] = useState([]);
    const [Visible, setVisible] = useState(20);
    const moreGame = () => setVisible((prev)=> prev + 20);
    
    async function getData() {
      let browser = await resultBrowser;
      setBrowser(browser)
      // console.log(browser);
    }


    useEffect(() => {
        getData()
      }, [])
  return (
    <>
    {Browser.length > 0 ? <div className="container m-top my-5">
          <div className="row g-4 mt-3">
            {Browser.slice(0, Visible).map((val, index) => (<Item data={val} key={index} />))}
          </div>
          <div className='text-center mt-5'>
            <button onClick={moreGame} className='btn btn-dark text-warning border border-warning'>MORE GAMES</button>
          </div>
        </div>:<Loading />
        }
    </>
  )
}
