import { Link } from "react-router-dom";
import { useHandleChange } from "entities/Auth";
import { Spinner } from "shared";

import {
  SubTitle,
  StationsList,
  StationListItem,
  RadioBtn,
  BtnContainer,
  BtnBack,
  BtnLogIn,
  IconArrowLeft,
} from "./StaffUnit.styled";

export function StaffUnit() {
  const [formState, handleChange, isLoading] = useHandleChange();

  const isEmptyLoginForm = formState.station === "";

  return (
    <>
      <SubTitle>Wählen Sie eine Personaleinheit</SubTitle>

      <StationsList>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="chirurgisch"
            onChange={handleChange}
          />
          chirurgische Station, Krankenschwester
        </StationListItem>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="neurologisch"
            onChange={handleChange}
          />
          neurologische Station, Krankenschwester
        </StationListItem>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="traumatologisch"
            onChange={handleChange}
          />
          traumatologische Station, Krankenschwester
        </StationListItem>
      </StationsList>

      <BtnContainer>
        <Link to="/">
          <BtnBack type="button">
            <IconArrowLeft />
            Zurück
          </BtnBack>
        </Link>
        <BtnLogIn type="submit" disabled={isEmptyLoginForm}>
          {isLoading ? <Spinner /> : "Log In"}
        </BtnLogIn>
      </BtnContainer>
    </>
  );
}