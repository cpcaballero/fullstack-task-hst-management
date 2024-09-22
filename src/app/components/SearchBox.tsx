import { TextField } from "@mui/material";

interface SearchBoxProps {
  setSearchQuery: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setSearchQuery }) => {
  return (
    <TextField
      label="Search Characters"
      variant="outlined"
      onChange={(e) => setSearchQuery(e.target.value)}
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBox;
