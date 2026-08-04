// Server component — exports generateStaticParams for static export
import ModulePageClient from "./ModulePageClient";

export function generateStaticParams() {
  return ["01", "02", "03", "04", "05", "06"].map((id) => ({ id }));
}

export default function ModulePage({ params }: { params: { id: string } }) {
  return <ModulePageClient id={params.id} />;
}
