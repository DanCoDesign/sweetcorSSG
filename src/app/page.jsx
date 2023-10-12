
import Hero from "../components/hero/hero";
import Featured from "../components/featured/Featured";
import AllPosts from "../components/allPosts/AllPosts";
import Container from "../components/Container";
import AboutSection from "@/components/aboutUs/AboutUs";
export default function Home() {

  return (
    <>
      <Hero />
      <Container className="flex gap-x-8 flex-col lg:flex-row md:px-12 lg:px-20 ">
        <Featured />
        <AllPosts />
      </Container>
      <Container className="flex flex-column bg-[#F4F0F8] dark:bg-[#2E3040] my-[96px]">
        <AboutSection />
      </Container>
    </>
  );
}
