import { MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Faq from "../../components/FAQ";


function Home() {
  return (
    <MantineProvider>
      <Navbar />
      <Faq/>
      <Footer/>
    </MantineProvider>
  );
}

export default Home;