import LogInForm from "../components/forms/auth/LogInForm";
import AuthPageTemplate from "../components/auth/AuthPageTemplate/AuthPageTemplate";

const LogInPage = () => {
  return (
    <AuthPageTemplate>
      <LogInForm />;
    </AuthPageTemplate>
  );
};

export default LogInPage;
