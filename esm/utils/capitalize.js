import { formatQdvErrorMessage as _formatQdvErrorMessage } from "@qodev/utils";
// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
export default function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? "Qodev-UI: capitalize(string) expects a string argument." : _formatQdvErrorMessage(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}