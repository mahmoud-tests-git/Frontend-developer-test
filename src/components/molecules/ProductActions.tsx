import Price from '../atoms/Price';
import BuyButton from '../atoms/BuyButton';

interface ProductActionsProps {
  price: number | string;
  currency?: string;
  onBuyClick?: () => void;
  buyButtonLabel?: string;
  className?: string;
}

export default function ProductActions({
  price,
  currency = '$',
  onBuyClick,
  buyButtonLabel,
  className = 'absolute bottom-0 right-0 p-0 w-full flex  gap-12',
}: ProductActionsProps) {
  return (
    <div className={className}>
      <Price amount={price} currency={currency} />
      <BuyButton label={buyButtonLabel} onClick={onBuyClick} />
    </div>
  );
}
