import type { FC } from 'react'
import type { ICar } from '../../../types';
import generateImage from '../list/generateİmage';

type Props ={
  car:ICar;
};

const Images:FC<Props> = ({car}) => {
  return (
     <div className="flex-1 flex-col gap-3">
      <div className="w-full h-40">
        <img
          src={generateImage(car, undefined, true)}
          className="h-full mx-auto object-cover rounded-md"
          alt={car.model}
        />
      </div>

      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "29")}
            className="mx-auto object-contain min-w-[140px]"
            alt={car.model}
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "33")}
            className="mx-auto object-contain min-w-[146px]"
            alt={car.model}
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "13")}
            className="mx-auto object-contain min-w-[146px]"
            alt={car.model}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
