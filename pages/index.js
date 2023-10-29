/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
MdEmail;
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import backend from "../public/backend.jpg";
import web from "../public/web.jpg";
import mobile from "../public/mobile.jpg";
import Image from "next/image";
import web1 from "../public/web1.jpeg";
import web2 from "../public/web2.jpeg";
import web3 from "../public/web3.jpeg";
import web4 from "../public/port4.jpg";
import web5 from "../public/port5.jpg";
import web6 from "../public/icon.png";
import web8 from "../public/port8.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Stivin's Portfolio</title>
        <meta name="description" content="contact me let's get started" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-4xl">stivin</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/files/EkeleStephenCV.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="lg:flex gap-10">
            <div className="text-center p-10 mt-20 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Stephen Ekele
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Software Engineer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Freelancer providing services for programming and development
                needs. Contact me down below and let's get started
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a
                  target="_blank"
                  href="https://github.com/stivin-00"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/ekele__stephen"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ekele-stephen-79426a19a/"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  target="_blank"
                  href="mailto: ekeleagbakwuru9@gmail.com"
                  rel="noreferrer"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 mb-20 md:h-96 md:w-96">
              <Image src={web6} layout="fill" objectFit="cover" alt="pic" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I'm a dedicated and passionate frontend developer with a strong
              skill set in TypeScript, React, Next.js, and Node.js. My
              experience includes building, deploying, and managing full-stack
              applications, as exemplified by my work at balm.ai. Additionally,
              I have a proven ability to integrate server APIs seamlessly and
              collaborate effectively within cross-functional teams, which I
              showcased during my tenure at Bookishmate.com.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={web} width={250} height={250} alt="pic" />
              <p className="py-2">
                Creating elegant website/web-apps suited for your needs
                following core development theory.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Next</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-teal-500 py-1">and more...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={mobile} width={250} height={250} alt="pic" />

              <p className="py-2">
                Do you have an idea for your next great cross platform app? Lets
                make it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">React Native</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">Google apis</p>
              <p className="text-gray-800 py-1">Push notifications</p>
              <p className="text-gray-800 py-1">Bio-Metric authentication</p>
              <p className="text-teal-500 py-1">and more...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={backend} width={250} height={250} alt="pic" />

              <p className="py-2">
                Are you interested in building backends for your current
                project? I can help you with that.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">Nodejs</p>
              <p className="text-gray-800 py-1">ExpressJs</p>
              <p className="text-gray-800 py-1">NodeMailer</p>
              <p className="text-gray-800 py-1">JWT</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-teal-500 py-1">and more...</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My professional journey is a testament to my commitment to
              excellence and my unwavering passion for front-end development. I
              am excited about the potential to contribute my skills and
              expertise to new and exciting projects. As I continue to evolve as
              a developer, I look forward to taking on fresh challenges and
              creating solutions that have a real impact.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Feel free to explore my portfolio to see examples of my work and
              get in touch if you'd like to discuss potential collaborations or
              opportunities.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a target="_blank" href="https://balm.ai/" rel="noreferrer">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  alt="pic"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a
                target="_blank"
                href="https://bookishmate.com/"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  alt="pic"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a target="_blank" href="https://martiful.com" rel="noreferrer">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                  alt="pic"
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a
                target="_blank"
                href="https://files.fm/f/zbzwvdscn"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                  alt="pic"
                />
              </a>
            </div>
          </div>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Thank you for visiting my portfolio, and I'm excited to connect with
            you.
          </p>
        </section>
        <footer className="text-center text-teal-500">
          Copyrigth ©2023 All rights reserved | powered by stivin
        </footer>
      </main>
    </div>
  );
}
