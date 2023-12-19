import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import sideImage from "@img/studying-background.png";
import planinLogo from "@img/logo.svg";
import supabase from "@services/supabase.js";

const Login = () => {
  const GOOGLE_DATA_CLIENT_ID = import.meta.env.VITE_GOOGLE_DATA_CLIENT_ID;

  async function handleSignInWithGoogle(response) {
    const { data, error } = await supabase.auth.signInWithIdToken(
      {
        provider: "google",
        token: response.credential,
        nonce: "", // must be the same one as provided in data-nonce (if any)
      },
      { redirectTo: "http://localhost:5173/cursos" },
    );
  }

  window.onload = function () {
    google.accounts.id.initialize({
      client_id: GOOGLE_DATA_CLIENT_ID,
      callback: handleSignInWithGoogle,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large", shape: "pill" }, // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  };

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90dvh", // Viewport height
      }}
      disableGutters
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              src={sideImage}
              alt="Imagem Lateral"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginLeft: "-15rem",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={planinLogo}
              alt="Logo"
              sx={{
                width: "80%",
                maxWidth: 400,
                marginBottom: "1rem",
              }}
            />
            <Box>
              <div id="buttonDiv"></div>
            </Box>

            <Box
              sx={{
                width: "100%",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  color: "#2D8FEB",
                  fontWeight: "bold",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Planeje as suas atividades com <br />
                mais facilidade e eficiência
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/*</Box>*/}
    </Container>
  );
};

export default Login;
