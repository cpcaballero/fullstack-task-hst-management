import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CharacterProps } from "../utils/types";
import styles from "../styles/CharacterCard.module.scss";

interface CharacterCardProps {
  character: CharacterProps;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onClick,
}) => {
  return (
    <Card className={styles.card} onClick={onClick}>
      <CardMedia
        component="img"
        alt={character.name}
        height="140"
        image={`https://starwars-visualguide.com/assets/img/characters/${
          character.url.split("/")[5]
        }.jpg`}
      />
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
