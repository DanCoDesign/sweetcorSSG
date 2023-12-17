
import Container from "@/components/Container"

import AboutHeader from "./components/header"
import Overview from "./components/overview"

export default function About() {


    return (
        <Container className="flex gap-x-8 flex-col">
            <div className="flex flex-col items-center min-h-fit space-y-32 md:px-12 lg:px-20  ">
                <AboutHeader />
            </div>
            <Overview />
        </Container>

    )
}
