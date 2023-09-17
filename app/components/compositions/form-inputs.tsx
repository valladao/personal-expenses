import {Form} from "@remix-run/react";

export default function FormInputs({formTitle, submitTitle}: {formTitle: string, submitTitle: string}) {
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
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" id="hidden" name="hidden" className="form-checkbox h-5 w-5 text-emerald-600" />
            <span className="text-gray-700">Hide Expense Group</span>
          </label>
        </div>
        <div className="flex justify-end">
          <button type="submit" name="intent" value="create" className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded">{submitTitle}</button>
        </div>

      </Form>
    </>
  )
}
