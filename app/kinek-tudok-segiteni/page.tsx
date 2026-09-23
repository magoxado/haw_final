import AudiencePage from "@/components/audience-page"

export default async function WhoCanIHelpPage({
  searchParams,
}: {
  searchParams: Promise<{ cel?: string }>
}) {
  const params = await searchParams
  const initial = params.cel === "magan" ? "magan" : "cegek"

  return <AudiencePage initial={initial} />
}
