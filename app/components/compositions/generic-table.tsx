import {Form} from "@remix-run/react";

export default function GenericTable({children}: {children: React.ReactNode}) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Expense Groups</h2>
      <Form method="post" reloadDocument>
        <table className="min-w-full bg-white border border-gray-200 border-separate rounded-md">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left"></th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </Form>
    </>
  )
}
