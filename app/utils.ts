export function getIntentData(intent: FormDataEntryValue | null) {
  const intentString = intent?.toString()
  const [action, idString] = intentString?.split("-") || []
  const idNumber = parseInt(idString, 10)

  return [action, idNumber]
}
