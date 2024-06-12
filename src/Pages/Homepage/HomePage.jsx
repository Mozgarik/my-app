import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import QuestList from "../../Components/QuestList/QuestList";
import Qualitat from "../../Components/Qualitat/Qualitat";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Qualitat/>
      <QuestList/>
      <Footer/>
    </div>
    
  );
}
 