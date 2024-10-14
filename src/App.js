import CoomingSoon from "./component/ComingSoon";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Video from "./component/Video";

function App() {
  return (
    <>
      <Navbar />
      <Video />
      <CoomingSoon name="CommingSoon" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
