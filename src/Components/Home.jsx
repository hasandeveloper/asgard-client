import { SignIn } from "./Authentication/SignIn";
import { SignUp } from "./Authentication/SignUp";

export const Home = () => {
  return (
    <>
        <SignUp/>
        <SignIn/>
    </>
  )
}

export default Home;

