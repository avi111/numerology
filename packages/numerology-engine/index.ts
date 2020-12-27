import Gematria from "./helpers/Gematria/Gematria";
import MainTriangle from "./Calculations/mainTriangle";
import Profile from "./MainTools/Profile";
import Props, {Gender} from "./interfaces/props";
import Couple from "./MainTools/Couple";
import Business from "./MainTools/Business";

const numerologyEngine = {
    Gematria,
    MainTriangle,
    Profile,
    Couple,
    Business
}

export {Props as props};
export {Gender as gender};


export default numerologyEngine;