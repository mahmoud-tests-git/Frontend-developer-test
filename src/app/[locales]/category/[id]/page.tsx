import CategoiresHeader from '@/components/organisms/CategoiresHeader';

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(`https://api.calvero.club/categories/${params.id}`);
  const json = await data.json();
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-10 pb-10">
      <CategoiresHeader title={json.name} description={json.description} />
    </div>
  );
}
