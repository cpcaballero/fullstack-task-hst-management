import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import styles from "../styles/Filters.module.scss";
import { CharacterProps } from "../utils/types";

interface FiltersProps {
  setFilters: (filters: { gender?: string; homeworld?: string }) => void;
  currentCharacters: CharacterProps[];
  setFilteredCharacters: (characters: CharacterProps[]) => void;
  filters: { gender?: string };
}

const Filters: React.FC<FiltersProps> = ({
  setFilters,
  currentCharacters,
  setFilteredCharacters,
  filters,
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const gender = event.target.value as string;
    setFilters({ gender });
    const filtered = currentCharacters.filter((character) =>
      gender ? character.gender === gender : true
    );
    setFilteredCharacters(filtered);
  };

  const clearFilters = () => {
    setFilters({});
    setFilteredCharacters(currentCharacters);
  };

  return (
    <div className={styles.filtersContainer}>
      <Box className={styles.filterBox}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Gender</InputLabel>
          <Select onChange={handleChange} value={filters.gender || ""}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={clearFilters}
        className={styles.clearButton}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
