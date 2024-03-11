import { useParams } from "react-router-dom";
import InfoMotoboy from "../../components/infoMotoboy";
import Header from "../../components/header";
import useMotoboys from "../../utils/getMotoboys";
import Footer from "../../components/footer";

function Motoboy() {
    const { id } = useParams();
    const motoboys = useMotoboys();
    const motoboy = motoboys.find((motoboy) => motoboy.id === id);

    return (
        <>  
            {id && motoboy && (
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
