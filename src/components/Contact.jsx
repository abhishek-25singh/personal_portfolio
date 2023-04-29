import React, { useState } from "react";
import { HiMail } from 'react-icons/hi';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';

const Contact = () => {
  const contact_info = [
    { logo: <HiMail />, text: "abhisheksinghparihar1998@gmail.com", link: "mailto:abhisheksinghparihar1998@gmail.com"  },
    { logo: <RiWhatsappFill />, text: "+91 8120797371", link: "https://wa.me/+918120797371" },
    {
      logo: <MdLocationPin />,
      text: "Gwalior, Madhya Pradesh, India",
      link: "https://goo.gl/maps/siaJeJcdPKVFnSX76" 
    },
  ];

  const [message, setMessage] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    setMessage("Limit reached out, Kindly Call, Whatsapp or Mail. Thanks")
  }
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-yellow-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" onSubmit={() => submitHandler(event)}>
            <input type="text" placeholder="Your Name" required />
            <input type="Email" placeholder="Your Email Address" required />
            <textarea placeholder="Your Message" rows={10} required></textarea>
            <span style={{color:"red"}}>{message && message}</span>
            <button className="btn-primary w-fit hover:bg-yellow-700">Send Message</button>
          </form>
          <div className="flex flex-col gap-7 group">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-yellow-600 rounded-full">
                  {contact.logo}
                </div>
                <a href={contact.link} target="_blank">
                <p className="text-gray-300 md:text-base text-sm  break-words group-hover:text-white">
                  {contact.text}
                </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default Contact;
