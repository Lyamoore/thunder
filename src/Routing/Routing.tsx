import { HomePage } from "@/Screens/Home";
import { NotFoundPage } from "@/Screens/NotFound";
import { Route, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
