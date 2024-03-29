import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchPatientByFilterMutation,
  ISearchPatientState,
  IPatient,
} from "entities/Patient";

export const usePatientsListFind = () => {
  const [patientList, setPatientList] = useState<IPatient[]>([]);
  const [fetchPatientsList, { isLoading, isError }] =
    useFetchPatientByFilterMutation();

  const handlePatientsListFind: SubmitHandler<
    ISearchPatientState
  > = async data => {
    try {
      const patientsListResponse = await fetchPatientsList(data).unwrap();
      setPatientList(patientsListResponse);
    } catch (error) {
      console.log("ERROR patientsListFormSubmit");
    }
  };

  const resetPatients = () => {
    setPatientList([]);
  };

  return {
    patientList,
    handlePatientsListFind,
    isLoading,
    isError,
    resetPatients,
  };
};
