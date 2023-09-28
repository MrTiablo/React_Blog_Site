import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Bcontext } from './context/Bcontext';
import './Viewblog.css'

function Viewblog() {
    const {post}=useContext(Bcontext)
    console.log(post);
  return (
    <div>
         <div className='cards'>
          {post.map((po,index)=>{
            return(
            <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{po.title}</Card.Title>
              <Card.Text>
               {po.blog}
              </Card.Text>
            </Card.Body>
          </Card>
      ) 
          })}
     
        </div>
    </div>
  )
}

export default Viewblog