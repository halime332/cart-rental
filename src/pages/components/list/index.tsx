import  { useEffect, useState, type FC } from 'react';
import { fetchCars } from '../../../utils/servis';
import type { ICar } from '../../../types';
import Warning from './warning';


const List: FC = () => {
  const [cars, setCars]=useState<ICar[]|null>(null);
const [error, setError]=useState<string | null>(null);

    useEffect(()=>{
        fetchCars()
        .then((data)=>setCars(data.results))
        .catch((err)=>setError(err.message));
       
    },[]);
    //1) cars state null ise>Henüz APIden cevap gelmemeiştir
    if(!cars) return  <Warning>Yükleniyor..<Warning/>;
    
      
    //2)error true ise >API den hatalı cevap gelmiştir
    if(error) return <p>Hata Mesajı</p>;

    //3)cars boş dizi ise>Aranılan kriterlerde veri yoktur

    if(cars.length<1) return <p>Veri bulunamadı</p>;

    //4)cars dolu ise>APIden veriler gelmiştir
  return (
    <div>
      <section>
        {cars.map((car,i)=>(
          <div key={i}>KART</div>
        ))}
      </section>
    </div>
  )
};

export default List;
