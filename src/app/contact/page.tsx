"use client";

import { FormEvent, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiMail } from "react-icons/fi";

const isAllEmpty = (formData:FormData) => {
    const requiredFields = ['fullname', 'email', 'subject', 'message'];
    return requiredFields.every(field => formData.get(field) !== null && formData.get(field) !== '');
}

export default function Contact() {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonData = {
      fullname: formData.get('fullname'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    const status = isAllEmpty(formData);
    if (!status) {
        toast.error('Lütfen tüm alanları doldurunuz!');
    } else {
      try {
        const response = await fetch("https://mail-api-portfolio.onrender.com/api/send-mail", {
          method: "POST",
          body: JSON.stringify(jsonData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          toast.success(data.message);
        } else {
          throw new Error("Sunucu tarafından bir hata ile karşılaşıldı!")
            .message;
        }
      } catch (error:any) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    document.title = 'İletişim';
  },[]);

  return (
    <main className="container mx-auto content flex items-center py-6 max-[575px]:flex-col max-[575px]:gap-6">
      <Toaster position="top-center" reverseOrder={true} />
      <section className="flex flex-col flex-1 items-center gap-y-4 px-10 max-[1023px]:pr-4 max-[1023px]:pl-0 max-[575px]:pl-4">
        <h1 className="text-[28px] leading-10 text-center max-[1023px]:text-xl">
          Benimle iletişime geçmek için ilgili alanları doldurup formu
          gönderebilirsin!
        </h1>
        <article className="flex gap-x-4 items-center">
          <FiMail className="w-6 h-6" />
          <div className="flex flex-col">
            <span>E-posta Adresim</span>
            <span>yclylmzx@gmail.com</span>
          </div>
        </article>
      </section>
      <section className="flex flex-col flex-1 items-center gap-y-4 px-10 max-[1023px]:pl-4 max-[1023px]:pr-0 max-[575px]:pr-4 max-[575px]:w-full">
        <h2 className="text-center text-2xl max-[575px]:text-xl">Bana Mesaj Gönderin!</h2>
        <form
          className="flex flex-col gap-y-6 w-3/4 items-center max-[1279px]:w-full"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="fullname"
            placeholder="Adınız Soyadınız*"
            className="w-full outline-none bg-[#f7f6fd] p-4 rounded-md"
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            placeholder="Email Adresiniz*"
            className="w-full outline-none bg-[#f7f6fd] p-4 rounded-md"
            autoComplete="off"
          />
          <input
            type="text"
            name="subject"
            placeholder="Konu*"
            className="w-full outline-none bg-[#f7f6fd] p-4 rounded-md"
            autoComplete="off"
          />
          <textarea
            placeholder="Mesajınız*"
            name="message"
            className="w-full h-36 resize-none outline-none bg-[#f7f6fd] p-4 rounded-md"
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            className="bg-[#ff642d] rounded-md w-32 h-10 text-white hover:border hover:border-solid hover:border-[#ff642d] hover:bg-white hover:text-[#ff642d] transition ease-linear duration-200"
          >
            Gönder
          </button>
        </form>
      </section>
    </main>
  );
}
