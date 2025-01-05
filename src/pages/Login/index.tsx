import Button from "../../components/Button";
import GridContainer from "../../components/Grid/Container";
import GridItem from "../../components/Grid/Item";
import Input from "../../components/Input";
import { useAuth } from "../../contexts/AuthContext";
import { useLoginStore } from "../../store/LoginStore";

const Login = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    validateForm,
  } = useLoginStore();
  const { login } = useAuth(); // Use login from context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform login logic here (you can use the login function from AuthContext)
      login(email); // This will set the user as authenticated
      console.log("Form submitted and user logged in");
      // handle form submission logic here
    }
  };

  return (
    <GridContainer>
      <GridItem>
        <div className="max-w-sm mx-auto p-6 bg-[#1f2b46] rounded-lg shadow-md">
          {/* Title of the form */}
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-500">
            Login
          </h2>

          <form onSubmit={handleSubmit}>
            <Input
              label="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              error={emailError}
              required
            />
            <Input
              label="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              error={passwordError}
              required
            />
            <Button text="submit" variant="primary" />
          </form>
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default Login;
