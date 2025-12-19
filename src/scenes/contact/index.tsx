import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/image.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ( {setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="kontakt" className="mx-auto pt-24 pb-32 w-full bg-gray-20 py-40">
        <motion.div className="mx-auto w-5/6"
         initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Kontakt)}
        >   
        <div className="md:w-3/5 items-center justify-center md:mx-auto">
            <h2 className="sm:text-3xl md:text-5xl font-bold">Skontaktuj się z nami
                <span className="text-rose-700"> Już dziś!</span>
            </h2>
            <p className="my-5">
                Masz pytania dotyczące naszych programów fitness lub chcesz dowiedzieć się więcej o tym, jak możemy Ci pomóc osiągnąć Twoje cele zdrowotne? 
                Nie wahaj się z nami skontaktować! Jesteśmy tutaj, aby Ci pomóc na każdym kroku Twojej fitnessowej podróży.
            </p>
        </div>
      </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-25 justify-between gap-8 md:flex w-5/6 mx-auto">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="IMIE"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="WIADOMOŚĆ"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 cursor-pointer rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                WYŚLIJ WIADOMOŚĆ
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full relative overflow-hidden rounded-lg md:rounded-xl before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
    </section>
  )
}

export default Contact;