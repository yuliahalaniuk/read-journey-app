import LogInForm from "../components/auth/forms/LogInForm";
import AuthPageTemplate from "../components/auth/AuthPageTemplate/AuthPageTemplate";

const LogInPage = () => {
  return (
    <AuthPageTemplate>
      <LogInForm />;
    </AuthPageTemplate>
  );
};

export default LogInPage;
