import PaginationBullet from '../atoms/PaginationBullet';

interface PaginationDotsProps {
  count: number;
  current: number;
  onSlideChange: (index: number) => void;
  className?: string;
}

export default function PaginationDots({
  count,
  current,
  onSlideChange,
  className = 'absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2',
}: PaginationDotsProps) {
  return (
    <div className={className}>
      {Array.from({ length: count }, (_, index) => (
        <PaginationBullet
          key={index}
          isActive={current === index + 1}
          onClick={() => onSlideChange(index)}
          index={index}
        />
      ))}
    </div>
  );
}
