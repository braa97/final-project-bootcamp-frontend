import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home/Home";
import CoordinatorProfile from "./components/CoordinatorProfile/CoordinatorProfile/CoordinatorProfile";
const root = ReactDOM.createRoot(document.getElementById("root"));
/*let instructors = [
  {"_id":"6444f50c44fb10691546967f","instructorId":"316421098","name":"Avi","apartments":[{"_id":{"$oid":"643f0aeb79e72e0a194a3620"},"apartmentName":"Garden Oasis","budget":{"$numberInt":"4500"},"image":"https://www.buyitinisrael.com/content/uploads/2022/09/WhatsApp-Image-2022-09-08-at-1.18.47-PM-553x415.jpeg","residents":[{"$oid":"643f0aeb79e72e0a194a3613"},{"$oid":"643f0aeb79e72e0a194a3616"},{"$oid":"643f0aeb79e72e0a194a3619"},{"$oid":"643f0aeb79e72e0a194a361c"},{"$oid":"643f0aeb79e72e0a194a361f"}],"address":"20 Allenby St, Tel Aviv, Israel","meals":[],"__v":{"$numberInt":"0"}},{"_id":{"$oid":"643f0984d660efefa6f0a9ae"},"apartmentName":"Sea View Residence","budget":{"$numberInt":"6000"},"image":"https://www.buyitinisrael.com/content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.00.25.jpeg","address":"15 Rothschild Blvd, Tel Aviv, Israel","residents":[{"$oid":"643f0984d660efefa6f0a9a2"},{"$oid":"643f0984d660efefa6f0a9a4"},{"$oid":"643f0984d660efefa6f0a9a7"},{"$oid":"643f0984d660efefa6f0a9aa"},{"$oid":"643f0984d660efefa6f0a9ad"}],"meals":[],"__v":{"$numberInt":"0"}}],"signature":"2JiMk11","email":"avi_78@gmail.com","password":"$2b$10$P29RrnM6nDGsYLgB4OOhQ.2jrdV2vkmOD2pfv17mGAHEOv1JqeN/m","reports":[],"__v":{"$numberInt":"0"},"image":"https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=344&q=80"},
  {"_id":"6446bdb0f0a5c8ccb3e3c46a","instructorId":"322220102","name":"jaber","apartments":[{"_id":{"$oid":"643f0b30b226cdfe95943745"},"apartmentName":"Urban Loft Living","budget":{"$numberInt":"7000"},"residents":[{"$oid":"643f0b30b226cdfe95943738"},{"$oid":"643f0b30b226cdfe9594373b"},{"$oid":"643f0b30b226cdfe9594373e"},{"$oid":"643f0b30b226cdfe95943741"},{"$oid":"643f0b30b226cdfe95943744"}],"image":"https://www.buyitinisrael.com/content/uploads/2020/09/WhatsApp-Image-2020-09-24-at-13.06.29.jpeg","address":"8 Dizengoff St, Tel Aviv, Israel","meals":[],"__v":{"$numberInt":"0"}}],"signature":"sadsa","email":"kameel@gmail.com","phoneNumber":"058-09777855","password":"$2b$10$7521gljxELW8ofbBjK4y1.EBxvSYfyecYx66YnEb2CudpIX0f2rgi","reports":[],"__v":{"$numberInt":"0"}},
  {"_id":"64482be7d95d094636eab9c4","instructorId":"316421098","name":"Moshi","apartments":[{"_id":{"$oid":"6446b5388c22dbda75a02499"},"apartmentName":"Shankar","address":"Haifa","budget":{"$numberInt":"3000"},"residents":[],"meals":[],"__v":{"$numberInt":"0"}},{"_id":{"$oid":"643f0984d660efefa6f0a9ae"},"apartmentName":"Sea View Residence","budget":{"$numberInt":"6000"},"image":"https://www.buyitinisrael.com/content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.00.25.jpeg","address":"15 Rothschild Blvd, Tel Aviv, Israel","residents":[{"$oid":"643f0984d660efefa6f0a9a2"},{"$oid":"643f0984d660efefa6f0a9a4"},{"$oid":"643f0984d660efefa6f0a9a7"},{"$oid":"643f0984d660efefa6f0a9aa"},{"$oid":"643f0984d660efefa6f0a9ad"}],"meals":[],"__v":{"$numberInt":"0"}}],"signature":"2JiMk11","email":"avi_78@gmail.com","password":"$2b$10$P29RrnM6nDGsYLgB4OOhQ.2jrdV2vkmOD2pfv17mGAHEOv1JqeN/m","reports":[],"__v":{"$numberInt":"0"},"image":"https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=344&q=80"},
  {"_id":"6444f50c44fb10691546967f","instructorId":"316421098","name":"Avi","apartments":[{"_id":{"$oid":"643f0984d660efefa6f0a9ae"},"apartmentName":"Sea View Residence","budget":{"$numberInt":"6000"},"image":"https://www.buyitinisrael.com/content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.00.25.jpeg","address":"15 Rothschild Blvd, Tel Aviv, Israel","residents":[{"$oid":"643f0984d660efefa6f0a9a2"},{"$oid":"643f0984d660efefa6f0a9a4"},{"$oid":"643f0984d660efefa6f0a9a7"},{"$oid":"643f0984d660efefa6f0a9aa"},{"$oid":"643f0984d660efefa6f0a9ad"}],"meals":[],"__v":{"$numberInt":"0"}}],"signature":"2JiMk11","email":"avi_78@gmail.com","password":"$2b$10$P29RrnM6nDGsYLgB4OOhQ.2jrdV2vkmOD2pfv17mGAHEOv1JqeN/m","reports":[],"__v":{"$numberInt":"0"},"image":"https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=344&q=80"}

]

let numApart = 0
for(let instructor of instructors){
  numApart += instructor.apartments.length
}*/



root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
 
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
