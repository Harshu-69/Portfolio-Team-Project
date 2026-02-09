import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { register } from "./../../node_modules/@vitejs/plugin-react/dist/refresh-runtime";
import "../index.css";

function Contact() {
  const [formData, setFormData] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    // setFormData([...formData, data]);
    console.log(data);
  };

  return (
    <div
      onClick={handleSubmit(submitHandler)}
      className="px-6 py-32  bg-[#171A21]  "
    >
      <section className="m-w-6xl mx-auto h-screen ">
        <div className="flex items-center gap-2 text-center flex-col">
          <h1 className="text-5xl font-semibold tracking-tight">
            Get In Touch
          </h1>
          <h3 className="text-lg font-normal tracking-tight text-[#B3AA98] ">
            Have a project in mind or just want to chat? Feel free to reach out!
          </h3>
        </div>

        <div className="center-div flex mt-15 items-center justify-center gap-10">
          <div className="technical-skills w-[32vw] rounded-xl px-4 py-6 border border-zinc-500/30  bg-[#191D24]  h-[65vh]  mb-2">
            <h4 className="text-[1.190rem] font-semibold mb-4">
              Let's Connect
            </h4>

            <h6 className="text-[0.840rem]  text-zinc-400">
              I'm always excited to work on new projects and collaborate with
              fellow developers. Whether you have a question or just want to say
              hi, I'll try my best to get back to you!
            </h6>
            <div className="flex gap-5 mt-10 flex-col">
              <div className="flex gap-3">
                <div className=" px-3 rounded-md flex items-center justify-center bg-[#2D2528] ">
                  <CiMail className="text-[#D2654A] text-xl   " />
                </div>
                <div className="flex flex-col ">
                  <h5 className="text-xs tracking-tight font-semibold text-zinc-400 ">
                    Email
                  </h5>
                  <h4 className="text-[1rem] tracking-tight ">
                    khandalkarharsh668@gmail.com
                  </h4>
                </div>
              </div>
              <div className="flex gap-3">
                <div className=" px-3 rounded-md flex items-center justify-center bg-[#2D2528] ">
                  <IoLocationOutline className="  text-[#D2654A] text-xl   " />
                </div>
                <div className="flex flex-col ">
                  <h5 className="text-xs tracking-tight font-semibold text-zinc-400 ">
                    Location
                  </h5>
                  <h4 className="text-[1rem] tracking-tight ">Mumbai, India</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="right-div flex gap-10  flex-col ">
            <div className="other-skills flex flex-col items-start  gap-2  bg-[#191D24] border border-zinc-500/30 h-[65vh] px-8 w-[35vw] rounded-xl py-6 ">
              <form className="w-full ">
                <div className="text-sm flex flex-col mb-2 gap-1 ">
                  <h3 className="">Name</h3>
                  <input
                    {...register("name")}
                    className="   text-[1rem] py-2 px-1 rounded-sm  "
                    type="name"
                    placeholder="John Doe"
                  />
                  <hr className="text-zinc-600/30" />
                </div>
                <div className="text-sm flex flex-col mb-2 gap-1 ">
                  <h3 className="">Email</h3>
                  <input
                    {...register("email")}
                    className="  active:border-[#D2654A]  text-[1rem] py-2 px-1 rounded-sm  "
                    type="name"
                    placeholder="john@example.com"
                  />
                  <hr className="text-zinc-600/30" />
                </div>
                <div className="text-sm flex flex-col  gap-2 ">
                  <h3 className="">Message</h3>
                  <textarea
                    {...register("description")}
                    className="overflow-y-auto no-scrollbar rounded-sm p-2 text-[1rem] block h-30 "
                    placeholder="Tell me about your project..."
                    id=""
                  ></textarea>
                  <hr className="text-zinc-600/30" />
                </div>
                <small className="text-[.700rem] mt-2 text-red-500">
                  Message must be at least 10 characters
                </small>
                <br />
                <button className="w-full py-4 rounded-full  mt-2 border border-zinc-600/30 hover:bg-[#D2654A] transition-all duration-300 ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
