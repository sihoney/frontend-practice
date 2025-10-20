import { Link } from "react-router-dom";
import Container from "../components/Container";

function Section({ content }) {
  const { title, subTitles } = content;

  return (
    <div>
      <div>{title}</div>
      <div>
        {subTitles.map((obj) => (
          <div>{obj.subTitle}</div>
        ))}
      </div>
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
  {},
];

export default function UsingAbstract() {
  return (
    <Container>
      <div>
        <div>Abstract > Using Abstract</div>
        <div>Using Abstract</div>
        <p>
          Abstract lets you manage, version, and document your designs in one
          place.
        </p>
      </div>
      <div>
        {bannerContent.map((c) => (
          <Section content={c} />
        ))}
      </div>
    </Container>
  );
}
