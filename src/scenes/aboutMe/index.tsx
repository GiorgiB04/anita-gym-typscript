import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const AboutMe = ( {setSelectedPage} : Props) => {
  return (
    <section id="omnie" className="w-full bg-primary-100 py-40">
      <motion.div className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Omnie)}
      >
        <div className="md:w-3/5 items-center justify-center md:mx-auto">
          <h2 className="sm:text-3xl md:text-5xl font-bold">Twoja kondycja, 
            <span className="text-rose-700">Twój rytm.</span>
          </h2>
          <p className="my-5">
            Odkryj siłę, zdrowie i pewność siebie dzięki naszym spersonalizowanym programom fitness.
            Niezależnie od Twojego poziomu zaawansowania, nasi doświadczeni trenerzy pomogą Ci 
            osiągnąć cele i przekształcić życie. Dołącz do naszej społeczności już dziś i zacznij swoją podróż ku lepszemu ja!
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe;