import { TitleBoxEl, InfoEl, SearchEl } from "entities/Services";
import { useAppSelector } from "shared";

import { Container } from "./Services.styled";

export const ServicesEl: React.FC = () => {
  const servicesList = useAppSelector(state => state.services.services);
  const patient = useAppSelector(state => state.patients.patient);

  return (
    <Container>
      <TitleBoxEl />

      {servicesList.length > 0 && patient._id !== "" ? (
        <InfoEl />
      ) : (
        <SearchEl />
      )}
    </Container>
  );
};