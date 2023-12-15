import Container from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import planinLogo from "@img/logo.svg";
import calendario from "@img/calendario-gestor.png";
import disciplinas from "@img/disciplinas.png";
import curso from "@img/cursos-aulas.png";
import { ItemMenuCentral } from "@ui/ItemMenuCentral";

const Menu = () => {
  const itens = [
    {
      imagem: calendario,
      textoAlternativo: "Calendários",
      textoPrincipal: "CALENDÁRIOS",
    },
    {
      imagem: disciplinas,
      textoAlternativo: "Disciplinas",
      textoPrincipal: "DISCIPLINAS",
    },
    {
      imagem: curso,
      textoAlternativo: "Cursos",
      textoPrincipal: "CURSOS",
    },
  ];

  return (
    <Grid container xs={12}>
      <Grid item display="flex" justifyContent="center" alignItems="center">
        <img
          src={planinLogo}
          alt="Logo Planin"
          width="200px"
          height="66.67px"
        />
      </Grid>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={390}
        height={95.33}
      >
        {itens.map(({ imagem, textoAlternativo, textoPrincipal }) => (
          <ItemMenuCentral
            imagem={imagem}
            textoAlternativo={textoAlternativo}
            textoPrincipal={textoPrincipal}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Menu;
