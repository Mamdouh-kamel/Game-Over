import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
  let { title, thumbnail, short_description, genre, id } = props.data
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <Link className='text-decoration-none' to={`/details/${id}`}>
          <div className="card bg-dark shadow border border-warning border-opacity-25">
            <div className="image-wrapper">
              <img src={thumbnail} className="card-img-top" alt="" />
              <div className="loader-wrapper">
                <div class="spinner-grow" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className="card-title text-white-50 text-truncate">{title}</h5>
                <span className='badge text-bg-warning text-white text-uppercase'>free</span>
              </div>
              <p className="card-text text-muted text-truncate pe-3">{short_description}</p>
              <div className='d-flex justify-content-between align-items-center'>
                <i className='fas fa-plus-square text-muted'></i>
                <div>
                  <span className='badge text-bg-secondary badge-genre p-1 text-dark me-2'>{genre}</span>
                  <i className='fab fa-windows text-muted'></i>
                </div>

              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
