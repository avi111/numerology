import Gematria from "./helpers/Gematria/Gematria";
import MainTriangle, {Triangle} from "./Calculations/mainTriangle";
import Profile from "./MainTools/Profile";
import Props, {Gender} from "./interfaces/props";
import Couple from "./MainTools/Couple";
import Business from "./MainTools/Business";
import Chakra from "./Calculations/Chakra";
import NameMapClass from "./MainTools/NameMapClass";
import ProfileProps from './MainTools/Profile';
import { allLetters, REGULAR_LETTERS, SUFFIX_LETTERS } from "./consts/letters";

export {
    Gematria,
    MainTriangle,
    Profile,
    Couple,
    Business,
    Chakra,
    NameMapClass,
    allLetters,
    SUFFIX_LETTERS,
    REGULAR_LETTERS
};

export type IProps = Props;
export {Gender as gender};
export type IProfileProps = ProfileProps;
export type ITriangle = Triangle;
