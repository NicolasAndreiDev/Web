import { useParams } from "react-router-dom";
import InfoMotoboy from "../../components/infoMotoboy";
import Header from "../../components/header";
import useMotoboys from "../../utils/getMotoboys";
import Footer from "../../components/footer";

function Motoboy() {
    const { id } = useParams();
    const motoboy = useMotoboys(id);

    return (
        <>  
            {id && motoboy && motoboy.nome && motoboy.placa && motoboy.telefone && motoboy.email && (
                <>
                    <Header title={motoboy.nome}/>
                    <InfoMotoboy motoboyInfo={motoboy}/>
                    <Footer />
                </>
            )}
        </>
    );
}

export default Motoboy;
