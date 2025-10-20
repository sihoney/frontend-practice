import { Link } from "react-router-dom";
import Container from "../components/Container";

function BannerSection({ sectionContent }) {
  const { title, content, url, imgUrl } = sectionContent;
  return (
    <div className="flex">
      <img
        src={imgUrl}
        className="w-24 h-auto flex-shrink-0 object-contain mr-4"
      />
      <div className="pr-[20px]">
        <div className="text-2xl mt-[50px] mb-[20px]">{title}</div>
        <div className="text-xl mb-[20px]">{content}</div>
        <Link to={url} className="text-xl text-blue-900 hover:underline">
          Learn More
        </Link>
      </div>
    </div>
  );
}

const bannerSection = [
  {
    title: "Using Abstract",
    content:
      "Abstract lets you manage, version, and document your designs in one place.",
    url: "/using-abstract",
    imgUrl:
      "https://help.goabstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878",
  },
  {
    title: "Manage your account",
    content:
      "Configure your account settings, such as your email, profile details, and password.",
    url: "/",
    imgUrl:
      "https://help.goabstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878",
  },
  {
    title: "Manage organizations, teams, and projects",
    content:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    url: "/",
    imgUrl:
      "https://help.goabstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878",
  },
  {
    title: "Manage billing",
    content: "Change subscriptions and payment details.",
    url: "/",
    imgUrl:
      "https://help.goabstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878",
  },
];

export default function HelpCenter() {
  return (
    <div>
      <div className="h-[500px] bg-blue-100 py-[100px] text-center">
        <h1 className="text-7xl mb-[50px] font-bold">How can we help?</h1>
        <input
          type="text"
          placeholder="Search"
          className="border rounded bg-white w-[700px] p-[20px] text-2xl"
        />
      </div>
      <Container>
        <div className="grid grid-cols-2 my-30">
          {bannerSection.map((sc) => (
            <BannerSection sectionContent={sc} />
          ))}
        </div>
      </Container>
    </div>
  );
}
