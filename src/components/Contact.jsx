import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import "../index.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState([]);

  // console.log(color);

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    // setFormData([...formData, data]);
    console.log(data);
  };

  return (
    <div onClick={handleSubmit(submitHandler)} className="px-6 py-32    ">
      <section className="m-w-6xl  mx-auto h-screen ">
        <div className="flex items-center gap-2 text-center flex-col">
          <h1 className="text-5xl font-semibold tracking-tight">
            Get In Touch
          </h1>
          <h3 className="text-lg font-normal tracking-tight  ">
            Have a project in mind or just want to chat? Feel free to reach out!
          </h3>
        </div>

        <div className="center-div h-[70vh]  flex mt-15 items-center justify-center gap-10">
          <div
            className={
              darkMode
                ? " left-div technical-skills w-[38vw] rounded-xl px-4 py-6 border border-zinc-500/30  bg-[#191D24]  h-full  mb-2"
                : "technical-skills w-[38vw] rounded-xl px-4 py-6 border border-zinc-500/30  bg-[#F1F1F1]  h-full  mb-2"
            }
          >
            <h4
              className={
                darkMode
                  ? "text-[1.190rem] text-white font-semibold mb-4"
                  : "text-[1.190rem] text-black font-semibold mb-4"
              }
            >
              Let's Connect
            </h4>

            <h6 className="text-[0.840rem]  ">
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
                  <h4
                    className={
                      darkMode
                        ? "text-[1rem] text-white tracking-tight "
                        : "text-[1rem] text-black tracking-tight "
                    }
                  >
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
                  <h4
                    className={
                      darkMode
                        ? "text-[1rem] tracking-tight  text-white"
                        : "text-[1rem] tracking-tight  text-black"
                    }
                  >
                    Mumbai, India
                  </h4>
                </div>
              </div>
              <div>
                <p className="text-base mb-2">follow me on</p>
                <div className="flex  gap-5">
                  <FiGithub
                    className={
                      darkMode ? "text-xl text-white " : "text-xl text-black "
                    }
                  />
                  <FiLinkedin
                    className={
                      darkMode ? "text-xl text-white" : "text-xl text-black"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right-div w-[38vw] flex gap-10 h-full  flex-col ">
            <div
              className={
                darkMode
                  ? "other-skills flex flex-col items-start  gap-2  bg-[-[#191D24] border border-zinc-500/30 h-full px-8 w-full rounded-xl py-6 "
                  : "other-skills flex flex-col items-start  gap-2  bg-[#f1f1f1] border border-zinc-500/30 h-full px-8 w-full rounded-xl py-6 "
              }
            >
              <form className="w-full ">
                <div className="text-sm flex flex-col mb-2 gap-1 ">
                  <h3
                    className={
                      darkMode ? "text-white text-base" : "text-black text-base"
                    }
                  >
                    Name
                  </h3>
                  <input
                    {...register("name")}
                    className=" text-[1rem] py-2 px-1 rounded-sm "
                    type="name"
                    placeholder="John Doe"
                  />
                  <hr className="text-zinc-600/90" />
                </div>
                <div className="text-sm flex flex-col mb-2 gap-1 ">
                  <h3
                    className={
                      darkMode
                        ? " text-white text-base"
                        : "text-black text-base"
                    }
                  >
                    Email
                  </h3>
                  <input
                    {...register("email")}
                    className="  active:border-[#D2654A]   text-[1rem] py-2 px-1 rounded-sm  "
                    type="name"
                    placeholder="john@example.com"
                  />
                  <hr className="text-zinc-600/90" />
                </div>
                <div className="text-sm flex flex-col  gap-2 ">
                  <h3
                    className={
                      darkMode ? "text-white text-base" : "text-black text-base"
                    }
                  >
                    Message
                  </h3>
                  <textarea
                    {...register("description")}
                    className="overflow-y-auto no-scrollbar rounded-sm p-2 text-[1rem] block h-30 "
                    placeholder="Tell me about your project..."
                    id=""
                  ></textarea>
                  <hr className="text-zinc-600/90" />
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
