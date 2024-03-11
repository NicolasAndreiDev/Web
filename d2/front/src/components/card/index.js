import PropTypes from 'prop-types';
import style from './card.module.css';
import image from '../../assets/motoboy.png';
import { useNavigate } from 'react-router-dom';

function Card({ motoboyInfo }) {
    const navigation = useNavigate();

    function handleClick(id) {
        navigation(`${id}`);
    }

    return (
        <div onClick={() => handleClick(motoboyInfo.id)} className={style.motoboy_card}>
            <h2>{motoboyInfo.nome}</h2>
            <img src={image} alt={`Motoboy_Image_${motoboyInfo.name}`}/>
            <button className={style.view_button}>Visualizar</button>
        </div>
    );
}

Card.propTypes = {
    motoboyInfo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;