import Doctors from "./_components/Doctors";
import Hero from "./_components/Hero";
import Search from "./_components/Search";
export default function Home() {
  return (
    <div className=" px-16">
     <Hero/>
     <Search/>
     <Doctors/>
    </div>
  );
}
