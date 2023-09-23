import {Outlet} from "@remix-run/react";

export default function Database() {

  return (
    <div className="flex flex-col w-full pl-4 text-zinc-800">
      <Outlet />
    </div>
  );
}
