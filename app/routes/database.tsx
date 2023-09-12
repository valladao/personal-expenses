import {Outlet, useMatches} from "@remix-run/react";
import PageTitle from "~/components/elements/page-title";

function pageTitleBuilder(routeName: string | undefined, baseName: string) {
  if (!routeName) {
    return baseName;
  }

  return baseName + " - " + routeName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Database() {
  const lastRouteName = useMatches().pop()?.id.split(".").pop();
  const pageTitle = pageTitleBuilder(lastRouteName, "Database");

  return (
    <div className="flex flex-col w-full pl-4 text-zinc-800">
      <PageTitle>{pageTitle}</PageTitle>
      <Outlet />
    </div>
  );
}
