import {Form, Link} from "@remix-run/react";

export default function FormInputs({formTitle, submitTitle, submitIntent, cancel = false, selectedItem = null}: {formTitle: string, submitTitle: string, submitIntent: string, cancel?: boolean, selectedItem?: {name: string, hidden: boolean, id: number} | null}) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{formTitle}</h2>

      <Form method="post" reloadDocument>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={selectedItem?.name}
            key={selectedItem?.id ?? "new"}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" id="hidden" name="hidden" className="form-checkbox h-5 w-5 text-emerald-600" defaultChecked={selectedItem?.hidden} key={selectedItem?.id ?? "new"} />
            <span className="text-gray-700">Hide Expense Group</span>
          </label>
        </div>
        <div className="flex justify-end">
          {cancel ? (
            <Link to="/database/expense-group">
              <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded mr-3">Cancel</button>
            </Link>
          ) : null}
          <button type="submit" name="intent" value={submitIntent} className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded">{submitTitle}</button>
        </div>

      </Form>
    </>
  )
}
