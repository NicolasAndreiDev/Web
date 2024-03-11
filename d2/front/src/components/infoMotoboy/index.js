import PropTypes from 'prop-types';
import style from './infoMotoboy.module.css';
import image from '../../assets/perfilMoto.jpg';
import { useState } from 'react';

function InfoMotoboy({ motoboyInfo }) {
    const [save, setSave] = useState(false);
    const [dados, setDados] = useState({
        nome: motoboyInfo.nome,
        placa: motoboyInfo.placa,
        telefone: motoboyInfo.telefone,
        email: motoboyInfo.email
    });

    function handleClick() {
        setSave(prev => !prev);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setDados(prevDados => ({...prevDados, [name]: value}));
    }

    return (
        <div className={`${style.info_motoboy}  ${style.info_motoboy_high}`}>
            {motoboyInfo && (
                <div className={style.card_motoboy}>
                    <img src={image} alt='Image_motoboy' className={style.image}/>
                    <div className={style.inputs_buttons}>
                        <div className={style.dados_motoboy}>
                            {!save ? 
                            <>
                                <div className={style.input_style}>Nome: {dados.nome}</div>
                                <div className={style.input_style}>Telefone: {dados.telefone}</div>
                                <div className={style.input_style}>Email: {dados.email}</div>
                                <div className={style.input_style}>Placa: {dados.placa}</div> 
                            </>
                            : 
                            <>  
                                <div className={style.div_input}>
                                    <label>Nome: </label>
                                    <input value={dados.nome} onChange={(e) => handleChange(e)} name='nome' className={style.input_style} type='text'/>
                                </div>
                                <div className={style.div_input}>
                                    <label>Placa: </label>
                                    <input value={dados.placa} onChange={(e) => handleChange(e)} name='placa' className={style.input_style} type='text'/>
                                </div>
                                <div className={style.div_input}>
                                    <label>Telefone: </label>
                                    <input value={dados.telefone} onChange={(e) => handleChange(e)} name='telefone' className={style.input_style} type='text'/>
                                </div>
                                <div className={style.div_input}>
                                    <label>Email: </label>
                                    <input value={dados.email} onChange={(e) => handleChange(e)} name='email' className={style.input_style} type='text'/>
                                </div>
                            </>
                            }

                        </div>
                        <div className={style.buttons}>
                            <button className={style.edit_button} onClick={handleClick}>{!save ? "Editar" : "Salvar"}</button>
                            <button className={style.delete_button}>Excluir</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

InfoMotoboy.propTypes = {
    motoboyInfo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
        placa: PropTypes.string.isRequired,
        telefone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export default InfoMotoboy;
