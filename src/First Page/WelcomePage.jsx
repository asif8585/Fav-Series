import React from 'react'
import { Cards } from './Card';
import SData from './Sdata'




export function Welcome(props) {
    return(
      <>
      
      <div className="AllCards">
               <Cards
                   imgsrc={SData[0].imgsrc}
                   sname={SData[0].sname}
                   title={SData[0].title}
                   slink={SData[0].slink}
               />

               <Cards
                   imgsrc={SData[1].imgsrc}
                   sname={SData[1].sname}
                   title={SData[1].title}
                   slink={SData[1].slink}
               />
                <Cards
                   imgsrc={SData[2].imgsrc}
                   sname={SData[2].sname}
                   title={SData[2].title}
                   slink={SData[2].slink}
               />
                <Cards
                   imgsrc={SData[3].imgsrc}
                   sname={SData[3].sname}
                   title={SData[3].title}
                   slink={SData[3].slink}
               />

              <Cards
                   imgsrc={SData[4].imgsrc}
                   sname={SData[4].sname}
                   title={SData[4].title}
                   slink={SData[4].slink}
               />

              <Cards
                   imgsrc={SData[5].imgsrc}
                   sname={SData[5].sname}
                   title={SData[5].title}
                   slink={SData[5].slink}
               />
           
           

      </div>        

    </>
    )
}