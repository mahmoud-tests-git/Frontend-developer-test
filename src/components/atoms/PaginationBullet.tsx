interface PaginationBulletProps {
  isActive: boolean;
  onClick: () => void;
  index: number;
  className?: string;
}

export default function PaginationBullet({
  isActive,
  onClick,
  index,
  className = 'w-12 h-2 rounded-full transition-all duration-300',
}: PaginationBulletProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        isActive ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  );
}
