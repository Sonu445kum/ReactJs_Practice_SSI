// import React from 'react'

// export default function Default_Greeting({name,message}) {
//   return (
//     <div>
//         <h1>Greeting</h1>
//         <p>Name:{name}</p>
//         <p>Meassage:{message}</p>
//     </div>
//   )
// }
// Default_Greeting.defaultProps={
//     name:" Deafult Sonu",
//     message:"Deafult Message"
// }

import React from 'react'

export default function Default_Greeting({name="Sonu Default",message="Hi There I m Default Person"}) {
  return (
    <div>
        <h1>Greeting To Some one</h1>
        <p>Name:{name}</p>
        <p>Meassage:{message}</p>
    </div>
  )
}
