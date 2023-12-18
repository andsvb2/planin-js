import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags(list) {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={list}
        getOptionLabel={(option) => option.nome}
        defaultValue={[list[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={list}
        getOptionLabel={(option) => option.nome} //substituit title;
        defaultValue={[list[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-filled"
        options={list.map((option) => option.nome)}
        defaultValue={[list[1].nome]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            // eslint-disable-next-line react/jsx-key
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-readOnly"
        options={list.map((option) => option.title)}
        defaultValue={[list[1].nome, list[1].nome]}
        readOnly
        renderInput={(params) => (
          <TextField {...params} label="readOnly" placeholder="Favorites" />
        )}
      />
    </Stack>
  );
}


// import * as React from 'react';

// import Chip from '@mui/material/Chip';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';

// export default function Tags() {
//   return (
//     <Stack spacing={3} sx={{ width: 500 }}>
//       <Autocomplete
//         multiple
//         id="tags-standard"
//         options={top100Films}
//         getOptionLabel={(option) => option.title}
//         defaultValue={[top100Films[13]]}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             variant="standard"
//             label="Multiple values"
//             placeholder="Favorites"
//           />
//         )}
//       />
//       <Autocomplete
//         multiple
//         id="tags-outlined"
//         options={top100Films}
//         getOptionLabel={(option) => option.title}
//         defaultValue={[top100Films[13]]}
//         filterSelectedOptions
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="filterSelectedOptions"
//             placeholder="Favorites"
//           />
//         )}
//       />
//       <Autocomplete
//         multiple
//         id="tags-filled"
//         options={top100Films.map((option) => option.title)}
//         defaultValue={[top100Films[13].title]}
//         freeSolo
//         renderTags={(value, getTagProps) =>
//           value.map((option, index) => (
//             <Chip variant="outlined" label={option} {...getTagProps({ index })} />
//           ))
//         }
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             variant="filled"
//             label="freeSolo"
//             placeholder="Favorites"
//           />
//         )}
//       />
//       <Autocomplete
//         multiple
//         id="tags-readOnly"
//         options={top100Films.map((option) => option.title)}
//         defaultValue={[top100Films[12].title, top100Films[13].title]}
//         readOnly
//         renderInput={(params) => (
//           <TextField {...params} label="readOnly" placeholder="Favorites" />
//         )}
//       />
//     </Stack>
//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
// ];

