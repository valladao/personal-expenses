import type {V2_MetaFunction} from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col pl-4 text-zinc-800">
      <h1 className="text-2xl font-bold">Draft Index Page</h1>
      <p>I'll change this page in future...</p>
    </div>
  );
}
