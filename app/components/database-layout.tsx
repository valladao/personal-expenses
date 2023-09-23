import PageTitle from "~/components/elements/page-title";

export default function DatabaseLayout({pageTitle, children}: {pageTitle: string, children: React.ReactNode}) {
  return (
    <>
      <PageTitle>Database - {pageTitle}</PageTitle>
      <div className="flex">
        {children}
      </div>
    </>

  )
}
