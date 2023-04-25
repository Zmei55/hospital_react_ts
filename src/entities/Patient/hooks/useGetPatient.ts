import { useState, useEffect } from "react";
import { useAppSelector } from "shared";
import { IPatient } from "entities/Patient";

export const useGetPatient = (initialValue: IPatient) => {
  const getPatient = useAppSelector(state => state.patients.patient);
  const [patient, setPatient] = useState(initialValue);

  useEffect(() => {
    if (getPatient._id !== "") setPatient(getPatient);
  }, [getPatient]);

  return { getPatient, patient };
};
