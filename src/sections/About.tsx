import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "ReactJS",
    iconType: ReactIcon,
  },
  {
    title: "Docker",
    iconType: GithubIcon,
  },
  {
    title: "Golang",
    iconType: GithubIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "PostgreSQL",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "🖼️",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Music",
    emoji: "✨",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
  {
    title: "Running",
    emoji: "🏃",
  },
  {
    title: "Fishing",
    emoji: "🎣",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what i do, and what inspired me."
        />
        <div className="mt-20">
          <Card>
            <div className="">
              <div className="inline-flex">
                <StarIcon />
                <h3 className="">My Reads</h3>
              </div>
              <p className="">Explore the books shaping my perspectives.</p>
            </div>
            <Image src={bookImage} alt="Book cover" />
          </Card>
          <Card>
            <div className="">
              <StarIcon />
              <h3 className="">My Toolbox</h3>
              <p className="">
                Explore the technologies and tools I use to craft exceptional
                digital experiences.
              </p>
            </div>
            <div>
              {toolboxItems.map((i) => (
                <div key={i.title} className="">
                  <TechIcon component={i.iconType} />
                  <span className="">{i.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="">
              <StarIcon />
              <h3 className="">Beyond the Code</h3>
              <p className="">
                Explore my interests and hobbies beyond the digital realm
              </p>
            </div>
            <div className="">
              {hobbies.map((h) => (
                <div key={h.title} className="">
                  <span className="">{h.title}</span>
                  <span className="">{h.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smile emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
