import  { useEffect, useState, type FC } from 'react';
import { fetchCars } from '../../../utils/servis';
import type { ICar } from '../../../types';
import Warning from './warning';
import Card from './card';
import { useSearchParams } from 'react-router-dom';


const List: FC = () => {
const [params,setParams]=useSearchParams();
const [cars, setCars]=useState<ICar[]|null>(null);
const [error, setError]=useState<string | null>(null);

//urldeki arama parametrelerini besbe haline getir
const paramsObj=Object.fromEntries(params.entries());



    useEffect(()=>{
        fetchCars({...paramsObj})
        .then((data)=>setCars(data.results))
        .catch((err)=>setError(err.message));
       
    },[params]);
    //1) cars state null ise>Henüz APIden cevap gelmemeiştir
    if(!cars) return  <Warning>Yükleniyor..</Warning>;
    
      
    //2)error true ise >API den hatalı cevap gelmiştir
    if(error) return <Warning>Hata Mesajı</Warning>;

    //3)cars boş dizi ise>Aranılan kriterlerde veri yoktur

    if(cars.length<1) return <Warning>Veri bulunamadı</Warning>;

    //4)cars dolu ise>APIden veriler gelmiştir
  return (
    <div className='padding-x max-width'>
      <section className='home-cars-wrapper'>
        {cars.map((car,i)=>(
          <Card key={i} car={car}/>
        ))}
      </section>
    </div>
  )
};

export default List;
