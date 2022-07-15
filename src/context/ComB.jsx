import React, { useContext } from 'react'
import { name,fName } from '../App'

const ComB = () => {

    const h1=useContext(name)
    const h2=useContext(fName)
  return (<>
  <h1>hello {h1} {h2}</h1>
{/* //   <name.Consumer>
//      {
//         (h1)=>{
//           return (
//             <fName.Consumer>
//                 {
//                     (h2)=>{
//                         return(
//                             <h1>Hello World {h1} {h2}</h1>
//                         )
//                     }
//                 }
//             </fName.Consumer>
//           )
//         }
//      }
//    </name.Consumer> */}
</>
  )
}

export default ComB
