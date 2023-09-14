import type {LoaderArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import FormInputs from "~/components/compositions/form-inputs";

export function loader({params}: LoaderArgs) {
  const id = params.id;
  return id;
}

export default function ExpenseGroupEdit() {
  const id = useLoaderData();
  return (
    <FormInputs
      formTitle={"Edit Expense Group: ID " + id}
      submitTitle={"Save"}
    ></FormInputs>
  )
}
