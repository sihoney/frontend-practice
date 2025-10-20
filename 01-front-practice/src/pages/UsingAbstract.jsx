import { Link } from "react-router-dom";
import Container from "../components/Container";

function Section({ content }) {
  const { title, subTitles } = content;

  return (
    <div className="h-[500px]">
      <div className="text-5xl mb-[50px]">{title}</div>
      <ul>
        <ul>
          {subTitles.slice(0, 5).map((obj, idx) => (
            <li
              key={idx}
              className="text-2xl mb-[20px] hover:underline list-disc pl-5"
            >
              {obj.subTitle}
            </li>
          ))}

          {subTitles.length > 5 && (
            <li className="text-2xl text-blue-900 hover:underline cursor-pointer">
              See all {subTitles.length} articles
            </li>
          )}
        </ul>
      </ul>
    </div>
  );
}

const bannerContent = [
  {
    title: "Get Started in Abstract",
    subTitles: [
      {
        subTitle: "Try out Abstract",
        url: "/",
      },
      {
        subTitle: "The Abstract Design Workflow",
        url: "/",
      },
      {
        subTitle: "Start Working In Abstract",
        url: "/",
      },
      {
        subTitle: "Practice Abstract workflow",
        url: "/",
      },
    ],
  },
  {
    title: "Get Started in Abstract",
    subTitles: [
      {
        subTitle: "Try out Abstract",
        url: "/",
      },
      {
        subTitle: "The Abstract Design Workflow",
        url: "/",
      },
      {
        subTitle: "Start Working In Abstract",
        url: "/",
      },
      {
        subTitle: "Practice Abstract workflow",
        url: "/",
      },
      {
        subTitle: "The Abstract Design Workflow",
        url: "/",
      },
      {
        subTitle: "Start Working In Abstract",
        url: "/",
      },
      {
        subTitle: "Practice Abstract workflow",
        url: "/",
      },
    ],
  },
  {
    title: "Get Started in Abstract",
    subTitles: [
      {
        subTitle: "Try out Abstract",
        url: "/",
      },
      {
        subTitle: "The Abstract Design Workflow",
        url: "/",
      },
      {
        subTitle: "Start Working In Abstract",
        url: "/",
      },
      {
        subTitle: "Practice Abstract workflow",
        url: "/",
      },
      {
        subTitle: "The Abstract Design Workflow",
        url: "/",
      },
      {
        subTitle: "Start Working In Abstract",
        url: "/",
      },
      {
        subTitle: "Practice Abstract workflow",
        url: "/",
      },
    ],
  },
  {
    title: "Get Started in Abstract",
    subTitles: [
      {
        subTitle: "Try out Abstract",
        url: "/",
      },
      {
        subTitle: "The Abstract Design Workflow",
        url: "/",
      },
      {
        subTitle: "Start Working In Abstract",
        url: "/",
      },
      {
        subTitle: "Practice Abstract workflow",
        url: "/",
      },
    ],
  },
];

export default function UsingAbstract() {
  return (
    <div>
      <div className="bg-purple-100 h-[300px]">
        <Container>
          <div className="flex flex-col h-[300px] justify-center">
            <div>Abstract &gt; Using Abstract</div>
            <div className="text-8xl mb-[30px]">Using Abstract</div>
            <p className="text-2xl">
              Abstract lets you manage, version, and document your designs in
              one place.
            </p>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="my-[100px]">
            <div className="grid grid-cols-2">
              {bannerContent.map((c) => (
                <Section content={c} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
