import supabase from "@api/supabase";
import { useEffect } from "react";

const Teste = () => {
  const GOOGLE_DATA_CLIENT_ID = import.meta.env.VITE_GOOGLE_DATA_CLIENT_ID;
  console.log(GOOGLE_DATA_CLIENT_ID);

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: GOOGLE_DATA_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }, // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  };

  return (
    <>
      <div id="buttonDiv"></div>
    </>
  );
};

export default Teste;
