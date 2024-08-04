"use client";
import Image from "next/image";
import scss from "./Contact.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import tochki from "../../../assets/tochki.png";
import axios from "axios";

interface IFormTelegram {
  username: string;
  email: string;
  namber: number;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();

  const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    let messageTg = `Username:<b>${data.username}</b>\n`;
    messageTg += `Email Addres :<b>${data.email}</b>\n`;
    messageTg += `Email Addres :<b>${data.namber}</b>\n`;
    messageTg += `Descriotion : <b>${data.message}</b>\n`;
    return messageTg;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    console.log(data);
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: messageModel(data),
    });
    reset();
    alert("Сообщение отправлено");
  };

  return (
    <section id="#contacts" className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contactText}>
            <h1>Contact me</h1>
          </div>
          <div className={scss.contacts}>
            {/* <div className={scss.tochki}>
              <Image src={tochki} alt="" />
            </div> */}
            <div className={scss.contactForm}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={scss.box}>
                  <p>name</p>
                  <input
                    className={scss.name}
                    placeholder="Your name"
                    {...register("username", { required: true })}
                  />
                </div>
                <div className={scss.box}>
                  <p>email</p>
                  <input
                    className={scss.email}
                    placeholder="Your email"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className={scss.box}>
                  <p>namber</p>
                  <input
                    className={scss.email}
                    placeholder="Your email"
                    {...register("namber", { required: true })}
                  />
                </div>
                <div className={scss.box}>
                  <p>message</p>
                  <input
                    className={scss.message}
                    placeholder="Your message"
                    {...register("message", { required: true })}
                  />
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
            {/* <div className={scss.tochki}>
              <Image src={tochki} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
