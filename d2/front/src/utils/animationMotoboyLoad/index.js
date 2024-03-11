import style from './animationMotoboyLoad.module.css';
import image from '../../assets/motoboy.png';

function AnimationMotoboyLoad() {
    return(
        <div className={style.back}>
            <div className={style.animation}>
                <img src={image} alt={"Motoboy_Image"} className={style.image}/>
                <h2 className={style.title}>Motoboys</h2>
            </div>
        </div>
    )
}

export default AnimationMotoboyLoad;