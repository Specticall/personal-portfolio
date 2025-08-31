import Image from "next/image";
import Button from "../general/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

const socials = [
  {
    text: "joseph-yusmita",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/joseph-yusmita/",
  },
  {
    text: "@joseph.chrsy",
    icon: "mdi:instagram",
    link: "https://www.instagram.com/joseph.chrsy/",
  },
  {
    text: "josephyusmita@gmail.com",
    icon: "material-symbols:mail-outline-rounded",
    link: "mailto:josephyusmita@gmail.com",
  },
];
export default function Footer() {
  return (
    <footer className="bg-dark">
      <section className="section py-64 md:py-48">
        <Icon
          icon="clarity:arrow-line"
          className="md:hidden rotate-135 mb-8 text-[3rem] text-white"
        />
        <Image
          src={"/images/pfp.png"}
          alt="pfp"
          height={100}
          width={100}
          className="hidden w-24 md:block mb-8"
        />

        <header className="flex justify-between items-center">
          <h2 className="text-white text-heading max-w-[52rem]">
            Interested in working with me? <br className="sm:hidden" />
            <span className="text-secondary"> Let’s get in touch!</span>
            <span className="inline-flex text-body items-center justify-center border border-border/25 rounded-full px-6 py-2 align-middle ml-4 md:hidden">
              Thanks For Reading!
            </span>
            <Icon
              icon="clarity:arrow-line"
              className="hidden md:inline-block -rotate-135 text-[2.25rem] align-middle ml-2 mb-2 text-white"
            />
          </h2>
          <Image
            src={"/images/pfp.png"}
            alt="pfp"
            height={100}
            width={100}
            className="scale-130 lg:scale-100 md:hidden"
          />
        </header>
        <hr className="border-border/20 my-10" />
        <div className="flex items-center gap-8 md:flex-col-reverse md:items-start">
          <Button variant="secondary">Contact Me</Button>
          <div className="flex items-center gap-8 flex-wrap md:gap-6 md:gap-y-5">
            {socials.map((item, i) => {
              return (
                <a
                  key={i}
                  className="text-white inline-flex items-center gap-2 whitespace-nowrap group hover:text-secondary transition after:absolute after:left-0 after:w-full after:bottom-1 after:h-[1px] after:bg-white/50 relative after:transition-[scale] after:duration-300 after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 py-2 "
                  href={item.link}
                  target="_blank"
                >
                  <Icon
                    icon={item.icon}
                    className="text-xl text-secondary group-hover:text-secondary/50 transition"
                  />
                  {item.text}
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <div className="section flex items-center justify-between xs:justify-center text-secondary py-4">
        <p className="text-body">© Joseph Christian Yusmita</p>
        <p className="xs:hidden text-body">Portfolio 2025</p>
      </div>
    </footer>
  );
}
