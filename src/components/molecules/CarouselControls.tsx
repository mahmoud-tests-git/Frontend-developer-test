import { CarouselNext, CarouselPrevious } from '../ui/carousel';

interface CarouselControlsProps {
  previousClassName?: string;
  nextClassName?: string;
}

export default function CarouselControls({
  previousClassName = 'absolute left-4 top-1/2 -translate-y-1/2',
  nextClassName = 'absolute right-4 top-1/2 -translate-y-1/2',
}: CarouselControlsProps) {
  return (
    <>
      <CarouselPrevious className={previousClassName} />
      <CarouselNext className={nextClassName} />
    </>
  );
}
