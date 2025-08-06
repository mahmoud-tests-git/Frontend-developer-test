interface PriceProps {
  amount: number | string;
  currency?: string;
  className?: string;
}

export default function Price({
  amount,
  currency = '$',
  className = 'px-4 h-10 flex items-center justify-center rounded-none rounded-tr-xl flex-1 text-center bg-white text-lg',
}: PriceProps) {
  const formatPrice = (price: number | string) => {
    if (typeof price === 'number') {
      return price.toLocaleString();
    }
    return price;
  };

  return (
    <span className={className}>
      {currency}
      {formatPrice(amount)}
    </span>
  );
}
