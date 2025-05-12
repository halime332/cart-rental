import  { useEffect } from 'react'
import { fetchCars } from '../../../utils/servis';

const List = () => {
    useEffect(()=>{
        fetchCars()
        .then((data)=>console.log(data.results));
       
    },[]);
  return (
    <div>
      List
    </div>
  )
}

export default List;
