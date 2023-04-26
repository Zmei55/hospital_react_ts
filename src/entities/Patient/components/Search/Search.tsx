import { useAppSelector, Modal, SpinnerCenterBox, Spinner, Icon } from "shared";
import {
  SearchModalHeader,
  SearchModalForm,
  SearchList,
  useHandlePatientChange,
  usePatientsListFind,
  useTogglePatientsModal,
  initialSearchPatientState,
} from "entities/Patient";

import { Container, ModalBtn, ModalBoby } from "./Search.styled";

export const Search: React.FC = () => {
  const patientsList = useAppSelector(state => state.patients.patients);
  const { formState, handleChange } = useHandlePatientChange(
    initialSearchPatientState
  );
  const { handlePatientsListFind, isLoading } = usePatientsListFind(formState);
  const { showModal, toggleModal } = useTogglePatientsModal();

  return (
    <Container>
      <ModalBtn type="button" onClick={toggleModal} aria-label="find patient">
        <Icon icon="user-plus" size={48} />
        Wählen Sie einen Patient aus
      </ModalBtn>

      {showModal && (
        <Modal width="1392px" height="752px" onClose={toggleModal}>
          <SearchModalHeader
            handlePatientsListFind={handlePatientsListFind}
            toggleModal={toggleModal}
          />

          <ModalBoby>
            <SearchModalForm
              formState={formState}
              handleChange={handleChange}
              handlePatientsListFind={handlePatientsListFind}
            />

            {isLoading ? (
              <SpinnerCenterBox>
                <Spinner size={80} />
              </SpinnerCenterBox>
            ) : (
              <>
                {patientsList.length > 0 && (
                  <SearchList patientsList={patientsList} />
                )}
              </>
            )}
          </ModalBoby>
        </Modal>
      )}
    </Container>
  );
};