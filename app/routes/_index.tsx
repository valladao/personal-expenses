import type {V2_MetaFunction} from "@remix-run/node";
import PageTitle from "~/components/page-title";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col pl-4 text-zinc-800">
      <PageTitle>Draft Index Page</PageTitle>
      <p>I'll change this page in future...</p>
    </div>
  );

}
