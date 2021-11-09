import React from 'react'
import SData from './Sdata'



export function Cards(props) {
    return (
        <>
          <div class="card">
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.sname}</h5>
    <p class="card-text">{props.title}</p>
    <a href= {props.slink} target="_blank" class="btn btn-primary">Watch Now</a>
  </div>
</div>
        </>
    )
}