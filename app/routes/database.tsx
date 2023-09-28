import {Outlet} from "@remix-run/react";
import ErrorFallback from "~/components/compositions/error-fallback";

export default function Database() {

  return (
    <div className="flex flex-col w-full pl-4 text-zinc-800">
      <Outlet />
    </div>
  );
}

export function ErrorBoundary({error}: {error: Error}) {
  console.error('Error found:', error);

  return (
    <div className="flex flex-col w-full pl-4">
      <ErrorFallback>An unexpected error occurred.</ErrorFallback>
    </div>
  )
}
