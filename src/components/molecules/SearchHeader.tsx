'use client';
import Logo from '../atoms/Logo';
import SearchInput from '../atoms/SearchInput';
import CancelButton from '../atoms/CancelButton';

interface SearchHeaderProps {
  onCancel: () => void;
  onSearch?: (value: string) => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  className?: string;
}

export default function SearchHeader({
  onCancel,
  onSearch,
  searchValue,
  onSearchChange,
  className = 'flex justify-between items-center gap-12',
}: SearchHeaderProps) {
  return (
    <div className={className}>
      <span className="hidden md:block">
        <Logo />
      </span>
      <SearchInput
        value={searchValue}
        onChange={onSearchChange}
        onSubmit={onSearch}
      />
      <CancelButton onClick={onCancel} />
    </div>
  );
}
