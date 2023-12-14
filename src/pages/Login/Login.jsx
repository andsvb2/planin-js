import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import sideImage from "@img/studying-background.png";
import planinLogo from "@img/logo.svg";
import supabase from "@api/supabase";

const Login = () => {
  async function handleSignInWithGoogle(response) {
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: response.credential,
      nonce: "NONCE", // must be the same one as provided in data-nonce (if any)
    });
    console.log(data);
  }

  const GOOGLE_DATA_CLIENT_ID = import.meta.env.VITE_GOOGLE_DATA_CLIENT_ID;

  return (
    <Container
      component="main"
      sx={{ width: "100dvw", height: "100dvh" }}
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
                marginTop: "3rem",
              }}
            />
            <Box>
              <div
                id="g_id_onload"
                data-client_id={GOOGLE_DATA_CLIENT_ID}
                data-context="signin"
                data-ux_mode="popup"
                data-callback={handleSignInWithGoogle}
                data-nonce=""
                data-auto_prompt="false"
              ></div>

              <div
                className="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="continue_with"
                data-size="large"
                data-logo_alignment="left"
              ></div>
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
                  marginTop: "-11rem",
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
