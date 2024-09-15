import RegisterForm from "../components/auth/forms/RegisterForm";
import AuthPageTemplate from "../components/auth/AuthPageTemplate/AuthPageTemplate";

const RegisterPage = () => {
  return (
    <AuthPageTemplate>
      <RegisterForm />;
    </AuthPageTemplate>
  );
};

export default RegisterPage;
