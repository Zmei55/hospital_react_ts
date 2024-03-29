import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLogIn, ISingInState } from "entities/Auth";
import {
  Modal,
  InputEl,
  Button as AcceptBtn,
  Button as SignInBtn,
  Icon,
  Spinner,
} from "shared";

import {
  Container,
  Title,
  SubTitle,
  Form,
  InputsContainer,
  Label,
  ErrorTitle,
} from "./AuthMenu.styled";
import React from "react";

export const AuthMenu: React.FC = () => {
  const { isLoading, isError, handleSignInSubmit, errorModalClose } =
    useLogIn();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<ISingInState>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const isEmptyLoginForm =
    dirtyFields.username === undefined || dirtyFields.password === undefined;

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignInSubmit)}>
        <Title>{t("auth.title")}</Title>

        <SubTitle>{t("auth.text")}</SubTitle>

        <InputsContainer>
          <Label>
            <InputEl
              {...register("username", {
                required: "You did not enter a username",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              style={{ width: "368px" }}
              placeholder={t("auth.loginInput")}
              required
            />
          </Label>

          <Label>
            <InputEl
              type="password"
              {...register("password", {
                required: "You did not enter a password",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              style={{ width: "368px" }}
              placeholder={t("auth.passwordInput")}
              required
            />
          </Label>
        </InputsContainer>

        <SignInBtn
          id="signInBtn"
          type="submit"
          style={{ width: "368px", height: "72px" }}
          background="blue"
          disabled={isEmptyLoginForm}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {t("shared.button.signIn")}
              <Icon icon="caret-right-bold" size={24} color="white" />
            </>
          )}
        </SignInBtn>
      </Form>

      {isError && (
        <Modal onClose={errorModalClose}>
          <ErrorTitle>{t("auth.authError")}</ErrorTitle>
          <AcceptBtn
            id="errorLoginBtn"
            background="blue"
            style={{
              height: "72px",
              paddingRight: "44px",
              paddingLeft: "44px",
              marginBottom: "56px",
            }}
            onClick={errorModalClose}
          >
            Ok
          </AcceptBtn>
        </Modal>
      )}
    </Container>
  );
};
