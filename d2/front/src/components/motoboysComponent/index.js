import style from './motoboysComponent.module.css';
import Card from "../card";
import useMotoboys from '../../utils/getMotoboys';

function MotoboysComponent() {
    const motoboys = useMotoboys();
    
    return(
      <>
      {motoboys && 
        <section className={`${style.motoboys} ${motoboys.length > 4 && style.view}`}>
          {motoboys.map((motoboy) => (
              <Card key={motoboy.id} motoboyInfo={motoboy} />
          ))}
        </section>
      }
      </>
    )
}

export default MotoboysComponent;