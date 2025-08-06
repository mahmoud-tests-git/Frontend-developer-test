'use client';

import { useState } from 'react';

import SearchHeader from './SearchHeader';
import PopularSearches from './PopularSearches';

interface SearchCardProps {
  onCancel: () => void;
  onSearch?: (searchTerm: string) => void;
  onTermClick?: (term: string) => void;
  className?: string;
}

export default function SearchCard({
  onCancel,
  onSearch,
  onTermClick,
  className = 'py-3 container absolute top-0 left-0 bg-white z-50 w-full',
}: SearchCardProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    onSearch?.(value);
  };

  const handleTermClick = (term: string) => {
    setSearchValue(term);
    onTermClick?.(term);
  };

  return (
    <div className={className}>
      <SearchHeader
        onCancel={onCancel}
        onSearch={handleSearch}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      <PopularSearches onTermClick={handleTermClick} />
    </div>
  );
}
