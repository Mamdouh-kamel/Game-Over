import React, { useEffect, useState } from 'react'
import {  GameOptions, resultDetails } from '../../Api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import Loading from '../Loading/Loading';
import Styles from './ItemDetails.module.css'
import { useParams } from 'react-router-dom';
export default function ItemDetails() {

  let x = useParams();
  
  const [Details, setDetails] = useState('');
  
  let { title, thumbnail, description, developer,
    game_url, genre, minimum_system_requirements, platform, publisher,
    release_date, screenshots } = Details;
    let { graphics, memory, os, processor, storage } = minimum_system_requirements?minimum_system_requirements:'';
    
    const cloneItem = screenshots?.map((e, index) =>
    <SwiperSlide key={index}>{<img className='img-fluid' src={e.image} alt="" />}</SwiperSlide>)
    
      // async function get() {
      //     return await resultDetails(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${x.id}`, GameOptions);
      // }
  async function getData() {
    let details = await resultDetails(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${x.id}`, GameOptions);
    setDetails(details);
    // console.log(Details);
  }

  useEffect(() => {

    getData();
    

  }, []);

  return (
    <>
      {Details ?
        (<div className={`container py-5 mt-5`} >
          <div className={`${Styles.cover}`} style={{
            backgroundImage: `url(${screenshots?.map(e => e.image)[Math.floor(1)]})`
          }}>
            <div className={`${Styles.linear}`}>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className={`${Styles.sidebar} control-box`}>
                <div className="imge">
                  <img className='img-fluid rounded' src={thumbnail} alt={title} />
                </div>
                <div className="row gx-1 buttons my-3">
                  <div className='col-3 mr-2'>
                    <button className='btn btn-secondary w-100 py-3'>FREE</button>
                  </div>
                  <div className='col'>
                    <a className='btn btn-info text-light fw-bold w-100 py-3' href={game_url} type='button' alt=''>PLAY NOW <i className="fas fa-sign-out-alt"></i></a>
                  </div>
                  <div className="row gx-0 mt-3 bg-dark rounded overflow-hidden text-center">
                    <div className={`col-3 py-2 text-white-50 ${Styles.feedback}`}>
                      <div className="text-success"><i className="far fa-smile fa-lg"></i></div>
                      <div className="count mb-n2 text-muted">46</div>
                      <span className="title small">LIKE</span>
                    </div>
                    <div className={`col-3 py-2 text-white-50 ${Styles.feedback}`}>
                      <div className="text-secondary"><i className="far fa-meh fa-lg"></i></div>
                      <div className="count mb-n2 text-muted">10</div>
                      <span className="title small">MEH</span>
                    </div>
                    <div className={`col-3 py-2 text-white-50 ${Styles.feedback}`}>
                      <div className="text-danger"><i className="far fa-frown fa-lg"></i></div>
                      <div className="count mb-n2 text-muted">5</div>
                      <span className="title small">DISLIKE</span>
                    </div>
                    <div className={`col-3 py-2 text-white-50 ${Styles.feedback}`}>
                      <div className="text-info"><i className="far fa-plus-square fa-lg"></i></div>
                      <div className="count mb-n2 text-muted">1486</div>
                      <span className="title small">ADD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className='text-white-50 mt-3'>
                <h1 >{title}</h1>
              </div>
              <div className={`${Styles.roww} row mt-5`}>
                <div className="col-7 text-white-50 fw-light">
                  <div>
                    <ul>
                      <h4 className='fw-light fs-6'><i className="fas fa-crown mr-2"></i> Very Positive</h4>
                      <li><span>63</span> Member Ratings</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><i className="far fa-user mr-2"></i><span> 1482 Members have this game in their library!</span></li>
                    </ul>
                  </div>
                  <div className='d-inline-block me-4'>
                    <ul>
                      <li><i className="far fa-comment-alt mr-2"></i><span> 8 Reviews</span></li>
                    </ul>
                  </div>
                  <div className='d-inline-block'>
                    <ul>
                      <li><i className="fas fa-long-arrow-alt-up"></i><span>  55%Popularity</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="row text-white-50">
                  <h3 className='mt-4'>About {title}</h3>
                  <hr className='mt-2 mb-3' />
                  <div className={`${Styles.desc}`}>
                    <p className='text-justify lh-lg'>{description}</p>
                  </div>
                  <hr className='my-3' />
                  <div>
                    <p className={`${Styles.disclosure} text-muted fst-italic`}>Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding experience.
                      In order to keep everything free to use we may sometimes earn a small commission from some partners.
                      Find more info in our <a className='text-white text-decoration-none' href='https://www.freetogame.com/faq'>FAQ</a> page.
                    </p>
                  </div>


                </div>
                <div className="row text-white-50 mt-5 lh-1">
                  <h4>Additional Information</h4>
                  <p className='text-muted'>
                    <i className="fas fa-info-circle mr-2 me-2"></i>
                    Please note this free-to-play game may or may not offer optional in-game purchases.
                  </p>
                  <hr />
                </div>
                <div className={`row text-white-50 m-2 ${Styles.parag}`}>
                  <div className="col-6 col-md-4"><span className='text-muted'>Title</span><p>{title}</p></div>
                  <div className="col-6 col-md-4"><span className='text-muted'>Developer</span><p>{developer}</p></div>
                  <div className="col-6 col-md-4"><span className='text-muted'>Publisher</span><p>{publisher}</p></div>
                  <div className="col-6 col-md-4"><span className='text-muted'>Release Date</span><p>{release_date}</p></div>
                  <div className="col-6 col-md-4"><span className='text-muted'>Genre</span><p>{genre}</p></div>
                  <div className="col-6 col-md-4"><span className='text-muted'>Platform</span><p>{platform}</p></div>
                </div>
                <div className="row text-white-50 mt-5">
                  <h3>{title} Screenshots</h3>
                  <hr />
                  <div className={`${Styles.swipe}`}>
                    <Swiper
                      slidesPerView={1}
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000 }}
                      loop={true}>
                      {cloneItem}
                    </Swiper>
                  </div>
                </div>
                <div className="row text-white-50 mx- mt-5">
                  
                    <h3>Minimum System Requirements <span className='fs-5 text-muted'>({platform})</span></h3>
                    <hr />
                    <div className="col-6"><span className='text-muted'>Os</span><p>{os}</p></div>
                    <div className="col-6"><span className='text-muted'>Processor</span><p>{processor}</p></div>
                    <div className="col-6"><span className='text-muted'>Memory</span><p>{memory}</p></div>
                    <div className="col-6"><span className='text-muted'>Graphics</span><p>{graphics}</p></div>
                    <div className="col-6"><span className='text-muted'>Storage</span><p>{storage}</p></div>
                    <div className="col-6"><span className='text-muted'>Additional Notes</span><p>Specifications may change during development</p></div>
                </div>
              </div>

            </div>
          </div>
        </div>)
        : (<Loading />)}
    </>
  )
}
