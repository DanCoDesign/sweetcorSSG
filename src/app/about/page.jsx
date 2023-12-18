
import Container from "@/components/Container"
import AboutHeader from "./segments/header"
import Overview from "./segments/overview"
import MissionView from "./segments/missionview"
import AboutTeam from "./segments/aboutTeam"
import WhyStarted from "./segments/whystarted"
import Join from "@/components/JoinUs/joinUs"

export default function About() {


    return (
        <>
            <Container className="flex flex-col my-20">
                <div className="flex flex-col items-center min-h-fit space-y-32 md:px-12 lg:px-20  ">
                    <AboutHeader />
                </div>
                <Overview />
                <MissionView />
                <AboutTeam />
                <WhyStarted />
                <Join />
            </Container>

        </>
    )
}
