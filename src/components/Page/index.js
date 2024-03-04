import { useEffect } from "react";
import PageContent from "../PageContent";

import { Outlet } from "react-router-dom";

const Page = ({ currentPage }) => {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title =
      currentPage === ""
        ? `Patrick Dunn | About`
        : `Patrick Dunn | ${currentPage}`;
  }, [currentPage]);

  return (
    <section>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
};
export default Page;
