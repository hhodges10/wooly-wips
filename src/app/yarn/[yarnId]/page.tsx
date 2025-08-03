export default async function Page({
  params,
}: {
  params: Promise<{ yarnId: string }>;
}) {
  const { yarnId } = await params;
  return <div>My Yarn: {yarnId}</div>;
}
