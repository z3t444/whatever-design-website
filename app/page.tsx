import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import HeroApp from "./Home/hero";
import CardFeatureApp from "./Home/cardFeature";
import ScreenFeature from "./Home/screenFeature";
import Content_Desk from "./Home/Content_Desk";

// for icons imports
import IdeaIcons from "./Home/asset/Idea.svg";
import DesignIcons from "./Home/asset/Design.svg";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center -mt-5 gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "blue", size: "md" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>your website with our Platform.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>Beautiful and simple only at Whatever.</h2>
      </div>

      <section title="forSection">
        <HeroApp />
      </section>

      <div className={"mt-14"}>
        <div className="flex items-center justify-center gap-3">
          <Link
            isExternal
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}>
            Documentation
          </Link>
          <Link isExternal className={buttonStyles({ variant: "bordered", radius: "full" })} href={siteConfig.links.github}>
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8 flex justify-center">
          <Snippet hideSymbol hideCopyButton variant="flat">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </div>

      <section title="forFeatureSection">
        <ul className="p-20 pl-14 pr-14 rounded-[45px] bg-transparent ">
          <div className="flex justify-center text-center mx-auto">
            <h1 className={title({ size: "sm" })}>
              <span>
                Modern features and Standardization <br /> will be maintained.
              </span>
            </h1>
          </div>
          <CardFeatureApp />
        </ul>
        <div className="flex items-center mt-10 justify-center">
          <h1 className="text-nuetral-200 text-lg tracking-wider font-medium">Available Components Kit</h1>
        </div>
        <ScreenFeature />
      </section>

      {/* section for content */}
      <section title="for-content">
        <header className="mt-60" title="heading">
          <div className="flex justify-center">
            <Image src={IdeaIcons} alt="" width={150} />
          </div>
          <div className="text-6xl p-5 dark:-mt-14 text-center font-bold">Modern</div>
          <p className="dark:mt-3 text-center">The modern design that we provide.</p>
        </header>
        <a className="flex justify-center mt-7" href="">
          <Button radius="full">
            <Image src={DesignIcons} alt="" />
            Modern Design
          </Button>
        </a>
        <Content_Desk />
      </section>
    </section>
  );
}
