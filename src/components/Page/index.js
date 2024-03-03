import { useEffect } from "react";
import PageContent from "../PageContent";

import { Outlet } from "react-router-dom";

const Page = ({ currentPage }) => {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = currentPage === "" ? "About" : currentPage;
  }, [currentPage]);

  return (
    <section>
      <h2>{currentPage}</h2>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
};
export default Page;
