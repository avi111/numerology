import MainTriangle from "../Calculations/mainTriangle";
import Couple, {CoupleProps} from "./couple";
import MatchNameBirth from "../Calculations/matchNameBirth";
import PersonalYear from "../Calculations/personalYear";
import Hilltops from "../Calculations/hilltops";
import LifeRoute from "../Calculations/lifeRoute";

class Business {
    public triangle: MainTriangle;
    public couples: Couple[] = [];
    public selfProps: CoupleProps;
    public matchNameBirth: MatchNameBirth;
    public personalYear: PersonalYear;
    public hilltops: Hilltops;
    public lifeRoute: LifeRoute;

    constructor(props: CoupleProps[] | boolean, self: CoupleProps) {
        const {firstName: businessName, birthDate: businessStart} = self;
        this.triangle = new MainTriangle(businessStart, businessName);
        this.matchNameBirth = new MatchNameBirth(this.triangle);
        this.personalYear = new PersonalYear(businessStart, this.triangle);
        this.hilltops = new Hilltops(this.triangle);
        this.lifeRoute = new LifeRoute(`${businessName}`);

        this.selfProps = self;
        this.selfProps.firstName = businessName;
        this.selfProps.familyName = '';
        this.selfProps.birthDate = businessStart;

        if (props) {
            for (let i = 0; i < (props as CoupleProps[]).length - 1; i++) {
                // This is where you'll capture that last value
                for (let j = i + 1; j < (props as CoupleProps[]).length; j++) {
                    const partner1 = (props as CoupleProps[])[i];
                    const partner2 = (props as CoupleProps[])[j];
                    this.couples.push(new Couple(partner1, partner2));
                }
            }
        }
    }
}

export default Business;
