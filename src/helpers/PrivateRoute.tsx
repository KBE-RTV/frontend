import { useKeycloak } from "@react-keycloak/web";
import { LoadingPage } from "../components/pages/loadingPage";

const PrivateRoute = ({ children }: any) => {
 const { keycloak, initialized } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 if (!initialized) {
    return <LoadingPage/>;
 }

 if (!isLoggedIn){
    keycloak.login();
 }

 return children;
};

export default PrivateRoute;