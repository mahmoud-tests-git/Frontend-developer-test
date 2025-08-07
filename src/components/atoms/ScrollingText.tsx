interface ScrollingTextProps {
  text: string;
  repetitions?: number;
  className?: string;
}

export default function ScrollingText({
  text,
  repetitions = 10,
  className = 'text-7xl font-bold mx-8',
}: ScrollingTextProps) {
  return (
    <div className="flex animate-scroll whitespace-nowrap">
      {Array.from({ length: repetitions }, (_, i) => (
        <span key={i} className={className}>
          {text}
        </span>
      ))}
    </div>
  );
}
