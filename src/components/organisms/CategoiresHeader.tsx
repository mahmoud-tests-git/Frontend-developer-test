export default function CategoiresHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-center border-b border-gray-200 pb-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
