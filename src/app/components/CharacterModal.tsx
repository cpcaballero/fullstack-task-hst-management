import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { CharacterProps, FilmProps } from "../utils/types";
import { fetchFilmData } from "../utils/swapi";

import styles from "../styles/CharacterModal.module.scss";

interface CharacterModalProps {
  character: CharacterProps;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  const [films, setFilms] = useState<FilmProps[]>([]);

  useEffect(() => {
    const getFilms = async () => {
      const filmData = await fetchFilmData(character.films);
      setFilms(filmData);
    };

    getFilms();
  }, [character.films]);

  return (
    <Dialog open onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>{character.name}</DialogTitle>
      <DialogContent>
        <Typography>Height: {character.height}</Typography>
        <Typography>Mass: {character.mass}</Typography>
        <Typography>Gender: {character.gender}</Typography>
        <Typography>Birth Year: {character.birth_year}</Typography>
        <Typography variant="h6">Films:</Typography>
        <Grid container spacing={2} className={styles.filmContainer}>
          {films.map((film) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={film.url}
              className={styles.filmThumbnail}
            >
              <Typography variant="subtitle1">{film.title}</Typography>
              <Box
                component="img"
                src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}
                alt={film.title}
                className={styles.thumbnailImage}
              />
              <Typography variant="body2">Director: {film.director}</Typography>
              <Typography variant="body2">Producer: {film.producer}</Typography>
              <Typography variant="body2">
                Release Date: {film.release_date}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CharacterModal;
