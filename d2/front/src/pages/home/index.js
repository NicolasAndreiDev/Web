import Header from "../../components/header";
import MotoboysComponent from "../../components/motoboysComponent";
import Footer from "../../components/footer";
import AnimationMotoboyLoad from "../../utils/animationMotoboyLoad";
import { useContext, useEffect } from "react";
import { PageContext } from "../../providers/pageProvider";

function Home() {
  const { view, setView } = useContext(PageContext);

  useEffect(() => {
    setTimeout(() => {
      setView(true);
    }, 5000)
  }, [setView])

  return (
    <> 
      {!view && <AnimationMotoboyLoad />}
      <Header />
      <MotoboysComponent />
      <Footer />
    </>
  );
}

export default Home;