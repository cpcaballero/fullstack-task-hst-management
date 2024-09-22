// src/app/page.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";
import { fetchCharacters } from "./utils/swapi";
import styles from "./page.module.scss";
import { CharacterProps } from "./utils/types";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<
    CharacterProps[]
  >([]);
  const [filters, setFilters] = useState<{ gender?: string }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterProps | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchCharacters(currentPage, {}, searchQuery);
    setCharacters(data.results);
    setFilteredCharacters(data.results);
    setLoading(false);
    return;
  };

  const debouncedFetchData = useCallback(
    debounce(() => {
      fetchData();
    }, 800),
    [searchQuery]
  );

  useEffect(() => {
    if (searchQuery.trim() === "") {
      fetchData();
    } else {
      debouncedFetchData();
    }
    return () => {
      debouncedFetchData.cancel();
    };
  }, [currentPage, searchQuery, debouncedFetchData]);

  useEffect(() => {
    let filtered = characters;

    if (filters.gender) {
      filtered = filtered.filter(
        (character) => character.gender === filters.gender
      );
    }

    setFilteredCharacters(filtered);
  }, [filters, characters]);

  return (
    <main className={styles.main}>
      <SearchBox setSearchQuery={setSearchQuery} />
      <Filters
        setFilters={setFilters}
        currentCharacters={characters}
        setFilteredCharacters={setFilteredCharacters}
        filters={filters}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={styles.characterGrid}>
          {filteredCharacters.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onClick={() => {
                setSelectedCharacter(character);
                setModalOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <Pagination currentPage={currentPage} setPage={setCurrentPage} />
      {modalOpen && selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setModalOpen(false)}
        />
      )}
    </main>
  );
}
