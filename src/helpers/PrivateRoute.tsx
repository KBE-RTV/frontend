import { useKeycloak } from "@react-keycloak/web";
import { PleaseLoginPage } from "../components/pages/pleaseLoginPage";

const PrivateRoute = ({ children }: any) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : <PleaseLoginPage />;
};

export default PrivateRoute;