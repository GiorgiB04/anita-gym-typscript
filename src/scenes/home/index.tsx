import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import Herogirl from "@/assets/herogirl.png";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
} 

const Home = ({ setSelectedPage }: Props) => {

  return (
    <section 
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* IMAGE AND MAIN HEADER */}
        <motion.div className="md:flex mx-auto w-5/6 items-center justify-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS */}
                <motion.div 
                className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
                >
                    <div className="relative">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide underline decoration-[#FF8A9D]">
                            Silniejszy. Zdrowszy. Ty.
                        </h1>
                    </div>
                    <p className="mt-8">Przekształć swoje ciało i umysł dzięki naszym profesjonalnie 
                        przygotowanym programom fitness i poradom żywieniowym.</p>
                </motion.div>
                {/* ATIONS */}
                <motion.div 
                className="mt-8 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>Dołącz teraz</ActionButton>
                    <p>Dowiedz się więcej</p>
                </motion.div>
            </div>
            {/* IMAGE */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-22 md:mt-16 md:justify-items-end">
                <img alt="home-pageGraphic" src={Herogirl} />
            </div>
        </motion.div>
    </section>
  )
}

export default Home;