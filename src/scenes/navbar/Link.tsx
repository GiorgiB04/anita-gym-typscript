import type { SelectedPage } from "@/shared/types";
import Anchorlink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage,}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <Anchorlink 
    className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    transition duration-500 hover:text-primary-300 text-base`}
    href={`#${page.toLowerCase().replace(/ /g, "")}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Anchorlink>
  )
}

export default Link;