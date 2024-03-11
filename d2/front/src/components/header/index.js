import PropTypes from 'prop-types';
import style from './header.module.css';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftSquareFill } from "react-icons/bs";

function Header({ title }) {
    const navigation = useNavigate();

    return(
        <header className={style.header}>
            {title && 
                <BsArrowLeftSquareFill onClick={() => navigation(-1)} className={style.button_back} />
            }
            <h1>{title ? title : "Gestão de Motoboys"}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;