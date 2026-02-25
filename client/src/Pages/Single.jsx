import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router'
import Menu from '../Components/Menu'
function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="user-info">
            <span>John </span>
            <span>posted 2 days ago</span>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
             <img src={Edit} alt="" />
             </Link>
           
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
       <p>
         <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia libero praesentium qui beatae distinctio nam magnam ea asperiores modi nesciunt illum eum iusto dolores quae nihil incidunt quisquam, molestiae dolorum.
          Libero hic ipsum id doloremque, provident magnam quos, inventore et quia itaque eveniet ipsa fugit dignissimos dolorum sunt tempora ab eos. Cupiditate blanditiis tempora praesentium obcaecati rem. Repudiandae, nulla! Rerum?
          Hic dolorem ab rerum excepturi ipsa cum voluptates modi accusamus sequi porro nesciunt minus omnis saepe rem aliquid, illo, dolorum aperiam tempore. Sapiente expedita ab accusamus porro ullam tenetur temporibus.
          
           <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, pariatur, excepturi alias porro aperiam inventore ipsum possimus, debitis autem animi quia? Quo natus neque nemo nesciunt libero quisquam hic illo!
          Quae ea necessitatibus laboriosam repellendus temporibus, culpa cupiditate, non dolorum modi similique recusandae blanditiis asperiores provident nemo soluta reprehenderit obcaecati. Saepe quaerat nam laborum quis perspiciatis illo deserunt dignissimos nostrum! <br />
          
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis blanditiis saepe aliquam maxime consequatur est minima debitis deleniti eum itaque, nostrum modi exercitationem amet neque consequuntur alias accusantium ipsa!
        </p>
       </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}

export default Single