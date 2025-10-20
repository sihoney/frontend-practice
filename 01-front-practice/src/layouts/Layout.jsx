import { Outlet, Link } from "react-router-dom";
import Container from "../components/Container";

function Header() {
  return (
    <header className="bg-black h-[100px] flex items-center">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center text-white">
            <Link to="/" className="text-3xl px-[10px] hover:text-gray-500">
              Abstract
            </Link>
            <Link to="/" className="text-3xl px-[10px] hover:underline">
              <div>Help Center</div>
            </Link>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              className="px-6 py-2 bg-white text-3xl rounded"
              type="text"
              placeholder="Search"
            />
            <button className="px-6 py-2 text-white bg-black border-white text-3xl rounded">
              Submit a request
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded text-3xl rounded">
              Sign in
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function FooterSection({ content }) {
  const { title, subMenu } = content;

  return (
    <div className="mb-[20px]">
      <div className="text-3xl font-bold mb-[20px]">{title}</div>
      <ul>
        {subMenu.map((txt) => (
          <Link to="/" className="block text-xl hover:underline">
            {txt}
          </Link>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const footerMenu = [
    {
      title: "Abstract",
      subMenu: ["Start Trail", "Pricing", "Download"],
    },
    {
      title: "Resources",
      subMenu: ["Blog", "Help Center", "Release Notes", "Status"],
    },
    {
      title: "Community",
      subMenu: ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"],
    },
    {
      title: "Company",
      subMenu: ["About Us", "Careers", "Legal"],
    },
    {
      title: "Contact Us",
      subMenu: ["info@goabstract.com"],
    },
  ];

  return (
    <footer className="bg-black text-white pt-[50px]">
      <Container>
        <div>
          <div className="flex-grow grid grid-cols-5">
            {footerMenu.map(
              (fm, idx) => idx < 3 && <FooterSection key={idx} content={fm} />
            )}
            <div className="grid brid-rows-2">
              {footerMenu.map(
                (fm, idx) =>
                  idx >= 3 && <FooterSection key={idx} content={fm} />
              )}
            </div>
          </div>
          <div className="w-[300px] ml-auto">
            <div className="text-2xl">© Copyright 2025</div>
            <div className="text-2xl">
              Abstract Studio Design, Inc.
              <br />
              All rights reserved
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
