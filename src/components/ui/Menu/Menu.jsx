import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";

import planinLogo from "@img/logo.svg";
import calendarioGestor from "@img/calendario-gestor.png";
import disciplinasGestor from "@img/disciplinas.png";
import cursosGestor from "@img/cursos-aulas.png";
import notificacaoIcone from "@img/notificacao-icone.png";
import configuracoesIcone from "@img/configuracoes-icone.png";
import usuarioIcone from "@img/usuario-icone.png";

const Menu = () => {
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        display: "inline-flex",
        marginLeft: "3%",
      }}
    >
      <Box
        component={Link}
        to={"/"}
        sx={{
          width: 200,
          height: 66.67,
        }}
      >
        <img
          style={{ width: 200, height: 66.67 }}
          src={planinLogo}
          alt="Logo do Planin"
        />
      </Box>
      <Box
        sx={{
          width: 390,
          height: 95.33,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <Box
          component={Link}
          to={"/calendarios"}
          sx={{
            width: 106,
            height: 93.23,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            display: "flex",
            textDecoration: "none",
          }}
        >
          <img
            style={{ width: 64, height: 64 }}
            src={calendarioGestor}
            alt="Ícone para calendários"
          />
          <Typography
            sx={{
              width: 106,
              height: 24.23,
              textAlign: "center",
              color: "#6357F1",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            CALENDÁRIOS
          </Typography>
        </Box>
        <Box
          component={Link}
          to={"/disciplinas"}
          sx={{
            width: 106,
            height: 92,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            display: "inline-flex",
            textDecoration: "none",
          }}
        >
          <img
            style={{ width: 64, height: 64 }}
            src={disciplinasGestor}
            alt="Ícone para disciplinas"
          />
          <Typography
            sx={{
              width: 106,
              height: 23,
              textAlign: "center",
              color: "#6357F1",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            DISCIPLINAS
          </Typography>
        </Box>
        <Box
          component={Link}
          to={"/cursos"}
          sx={{
            width: 106,
            height: 95.33,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            display: "inline-flex",
            textDecoration: "none",
          }}
        >
          <img
            style={{ width: 64, height: 64 }}
            src={cursosGestor}
            alt="Ícone para cursos"
          />
          <Typography
            sx={{
              width: 106,
              height: 26.33,
              textAlign: "center",
              color: "#6357F1",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            CURSOS
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: 174,
          height: 40,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <img
          style={{ width: 40, height: 40 }}
          src={configuracoesIcone}
          alt="Ícone para configurações"
        />
        <img
          style={{ width: 40, height: 40 }}
          src={notificacaoIcone}
          alt="Ícone para notificações"
        />
        <img
          style={{ width: 40, height: 40 }}
          src={usuarioIcone}
          alt="Ícone para usuário"
        />
      </Box>
    </div>
  );
};

export default Menu;
