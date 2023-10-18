import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, DetailPage, ListPage, AddPage } from "./pages/pageIndex";
import Header from "./components/common/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
