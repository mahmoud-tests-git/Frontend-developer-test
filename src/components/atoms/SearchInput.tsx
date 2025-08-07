'use client';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/core/macro';

import { Input } from '../ui/input';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
}

export default function SearchInput({
  placeholder,
  value,
  onChange,
  onSubmit,
  className,
}: SearchInputProps) {
  const { i18n } = useLingui();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit && value) {
      onSubmit(value);
    }
  };

  return (
    <Input
      placeholder={placeholder || t(i18n)`Search...`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onKeyPress={handleKeyPress}
      className={className}
    />
  );
}
