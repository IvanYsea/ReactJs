import '../App.css'
import {useParams} from 'react-router-dom'

export default function SingleProduct({  }) {
const {prodId} = useParams()

    return (
      <>
    <div>
        <h1>Producto {prodId}</h1>
    </div>

      </>
    );
  }