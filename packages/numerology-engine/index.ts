import Gematria from "./helpers/Gematria/Gematria";
import MainTriangle from "./Calculations/mainTriangle";
import Profile from "./MainTools/Profile";
import Props, {Gender} from "./interfaces/props";

const numerologyEngine = {
    Gematria,
    MainTriangle,
    Profile
}

export {Props as props};
export {Gender as gender};


export default numerologyEngine;