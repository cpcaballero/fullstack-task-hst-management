import { Box, Button } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setPage }) => {
  return (
    <Box display="flex" justifyContent="center" marginTop={2}>
      <Button
        variant="contained"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <Box marginLeft={2}>
        {" "}
        <Button variant="contained" onClick={() => setPage(currentPage + 1)}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Pagination;
