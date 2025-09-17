import Category from "@/app/_components/Category";

export async function generateStaticParams() {
  const categories = ['skin', 'blood', 'lungs', 'eyes', 'stomach', 'brain'];

  return categories.map((cname) => ({
    cname: cname,
  }));
}

export default async function Search({ 
  params 
}: {
  params: Promise<{ cname: string }>;
}) {
  const { cname } = await params;

  return (
    <div>
      <Category category={cname} />
    </div>
  );
}