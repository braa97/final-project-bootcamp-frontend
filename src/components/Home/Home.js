import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  try {
    const object = location.state;
    console.log(object.userId);
  } catch (error) {
    console.log(error);
  }

  return <>
  <h1>Hiiiiiiiiiiiiii</h1></>;
}
