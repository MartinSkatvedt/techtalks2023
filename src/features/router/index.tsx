import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Program from "../../pages/Program";
import PageContainer from "../pageContainer/components";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer>
        <Home />
      </PageContainer>
    ),
  },
  {
    path: "/program",
    element: (
      <PageContainer>
        <Program />
      </PageContainer>
    ),
  },
  {
    path: "/about",
    element: (
      <PageContainer>
        <About />
      </PageContainer>
    ),
  },
]);

export default router;
