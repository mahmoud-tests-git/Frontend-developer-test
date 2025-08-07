'use client';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/core/macro';

import SearchTitle from '../atoms/SearchTitle';
import SearchBadge from '../atoms/SearchBadge';

interface PopularSearchesProps {
  searchTerms?: string[];
  onTermClick?: (term: string) => void;
  title?: string;
  className?: string;
}

export default function PopularSearches({
  searchTerms = ['Clavero', 'Watch', 'Gold', 'Luxury'],
  onTermClick,
  title,
  className = 'py-12 flex flex-col gap-4 justify-center items-center z-50',
}: PopularSearchesProps) {
  const { i18n } = useLingui();

  return (
    <div className={className}>
      <SearchTitle>{title || t(i18n)`Popular Search Terms`}</SearchTitle>
      <nav className="flex gap-4">
        {searchTerms.map((term, index) => (
          <SearchBadge
            key={index}
            label={t(i18n)`${term}`}
            onClick={() => onTermClick?.(term)}
          />
        ))}
      </nav>
    </div>
  );
}
