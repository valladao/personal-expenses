import PageTitle from "~/components/elements/page-title";

export default function DatabaseLayout({pageTitle, children}: any) {
  return (
    <>
      <PageTitle>Database - {pageTitle}</PageTitle>
      <div className="flex">
        {children}
      </div>
    </>

  )
}