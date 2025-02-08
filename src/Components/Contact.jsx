import React from "react";
import contact from "../assets/contact.svg";
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:p-10 md:pt-20 w-[90%] md:w-[80%] mx-auto">
      <div className="w-full  hidden md:block p-10">
        <img src={contact} alt="" />
      </div>
      <div className="w-full">
        <div className="leading-3">
          <p className="stock font-extrabold">CALL</p>
          <p className="relative  -top-4 text-4xl font-semibold">
            Let’s Build Something <br />
            Incredible Together
          </p>
          <div className="text-black">
            <form action="">
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="p-3 w-full rounded-md"
                />
                <input
                  type="text"
                  className="p-3 w-full rounded-md"
                  placeholder="Your Email"
                />
                <textarea
                  name=""
                  placeholder="Your Message"
                  id=""
                  cols={10}
                  rows={10}
                  className="p-3 w-full rounded-md"
                ></textarea>
                <div className="">
                  <button className="bg-blue-700 text-white px-10 py-5 rounded-md ">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
