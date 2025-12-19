import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import image1 from "@/assets/gym-1.jpg";
import image2 from "@/assets/gym-2.jpg";
import image3 from "@/assets/gym-3.jpg"; 

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const programs = ( {setSelectedPage} : Props) => {
  return (
    <section id="zajęcia" className="w-full bg-gray-20 py-40">
      <motion.div className="mx-auto w-5/6"
       initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Zajęcia)}
        >   
        <div className="md:w-3/5 items-center justify-center md:mx-auto">
            <h2 className="sm:text-3xl md:text-5xl font-bold">Odkryj nasze
                <span className="text-rose-700"> Programy Fitness</span>
            </h2>
            <p className="my-5">
                Przekształć swoje ciało i umysł dzięki naszym profesjonalnie przygotowanym 
                programom fitness i poradom żywieniowym.
            </p>
        </div>
      </motion.div>
      { /* PROGRAMS PHOTOS*/}
      <motion.div className="md:flex mx-auto w-5/6 gap-8 mt-25 justify-center"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Zajęcia)}
      >
        <div className="relative overflow-hidden rounded-lg md:rounded-xl group mb-5 md:mb-0">
            <img 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                src={image1} 
                alt="image1" 
            />
            <div className="absolute inset-0 bg-pink-400/0 group-hover:bg-pink-400/20 transition duration-500"></div>
        </div>
        <div className="relative overflow-hidden rounded-lg md:rounded-xl group mb-5 md:mb-0">
            <div className="relative overflow-hidden rounded-lg md:rounded-xl group">
            <img 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                src={image2} 
                alt="image2" 
            />
            <div className="absolute inset-0 bg-pink-400/0 group-hover:bg-pink-400/20 transition duration-500"></div>
            </div>
            <div className="absolute inset-0 bg-pink-400/0 group-hover:bg-pink-400/20 transition duration-500"></div>
        </div>
       <div className="relative overflow-hidden rounded-lg md:rounded-xl group mb-5 md:mb-0">
            <img 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                src={image3} 
                alt="image3"
            />
             <div className="absolute inset-0 bg-pink-400/0 group-hover:bg-pink-400/20 transition duration-500"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default programs;