import {
  useHandleInfoActive,
  useClearPatient,
  clearInitialPatient,
} from "entities/Patient";
import {
  useAppSelector,
  Button as InfoBtn,
  Button as ClearBtn,
  Icon,
} from "shared";

import { NameBlock, Name } from "./InfoNameBlock.styled";

interface IInfoNameBlock {}

export const InfoNameBlock: React.FC<IInfoNameBlock> = () => {
  const { name: patientName } = useAppSelector(state => state.patients.patient);
  const isInfoActive = useAppSelector(state => state.patients.isActiveInfo);
  const { clearPatient } = useClearPatient(clearInitialPatient);
  const { handleInfoActive } = useHandleInfoActive();

  return (
    <NameBlock>
      <InfoBtn
        width="48px"
        height="48px"
        background="transparent"
        onClick={handleInfoActive}
      >
        {isInfoActive ? (
          <Icon icon="caret-double-up-bold" size={24} color="grey" />
        ) : (
          <Icon icon="caret-double-down-bold" size={24} color="grey" />
        )}
      </InfoBtn>

      <Name>{patientName}</Name>

      <ClearBtn
        width="48px"
        height="48px"
        background="transparent"
        onClick={clearPatient}
      >
        <Icon icon="cross-bold" size={24} color="red" />
      </ClearBtn>
    </NameBlock>
  );
};