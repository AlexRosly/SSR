import { useContext } from "react";
import { pickerContext } from "./pickerContext";

export const usePickerContext = () => useContext(pickerContext);
