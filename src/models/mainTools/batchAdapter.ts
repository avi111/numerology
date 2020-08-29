import Profile from '@/models/mainTools/Profile';
import Couple, {CoupleProps} from '@/models/mainTools/couple';
import Business from '@/models/mainTools/business';
import {CSVRow} from '@/models/calculations/validate';
import IProfile, {ProfileInput} from '@/models/calculations/validate/IProfile';
import Props from '@/interfaces/props';
import ICouple, {CouplesInput} from '@/models/calculations/validate/ICouple';
import IBusiness, {BusinessInput} from '@/models/calculations/validate/IBusiness';

class BatchAdapter {
    public result: Profile | Couple | Business;

    constructor(profile: CSVRow) {
        let props: CSVRow;
        switch (this.typeGuard(profile)) {
            case 'couple':
                props = profile as CouplesInput;
                const {Partner1Props, Partner2Props} = this.prepareCouple(props as CouplesInput);
                this.result = new Couple(Partner1Props, Partner2Props);
                break;
            case 'business':
                props = profile as BusinessInput;
                const {outputProps, self} = this.prepareBusiness(props as BusinessInput);
                this.result = new Business(outputProps, self);
                break;
            default:
                props = profile as ProfileInput;
                const profileProps = this.prepareProfile(props as ProfileInput);
                this.result = new Profile(profileProps);
                break;
        }
    }

    public prepareProfile(props: ProfileInput): Props {
        return {
            firstName: props['first name'],
            familyName: props['family name'],
            motherNameAtBirthOfPatient: props['mother name at birth of patient'],
            fatherNameAtBirthOfPatient: props['father name at birth of patient'],
            motherName: props['mother name'],
            gender: props.gender,
            firstNameAtBirth: props['first name at birth'],
            birthDate: props['birth date'],
            birthHour: props['birth hour'],
            fatherName: props['father name'],
        };
    }

    public prepareCouple(props: CouplesInput): { Partner1Props: CoupleProps, Partner2Props: CoupleProps } {
        const Partner1Props: CoupleProps = {
            firstName: props['first name1'],
            familyName: props['family name1'],
            birthDate: props['birth date1'],
        };

        const Partner2Props: CoupleProps = {
            firstName: props['first name2'],
            familyName: props['family name2'],
            birthDate: props['birth date1'],
        };

        return {
            Partner1Props,
            Partner2Props,
        };
    }

    public prepareBusiness(props: BusinessInput): { outputProps: CoupleProps[] | boolean, self: CoupleProps } {
        const outputProps: CoupleProps[] = [
            {
                firstName: props['first name1'],
                familyName: props['family name1'],
                birthDate: props['birth date1'],
            },
            {
                firstName: props['first name2'],
                familyName: props['family name2'],
                birthDate: props['birth date1'],
            },
        ];

        const partner3 = {
            firstName: props['first name3'],
            familyName: props['family name3'],
            birthDate: props['birth date3'],
        };

        const self = {
            firstName: props['business name'],
            familyName: '',
            birthDate: props['business start date'],
        };

        if (Object.values(partner3).filter((p) => p).length) {
            outputProps.push(partner3);
        }
        return {
            outputProps,
            self,
        };
    }

    public typeGuard(profile: CSVRow) {
        if (Object.keys(new IProfile()).every((prop) => Object.keys(profile).indexOf(prop) !== -1)) {
            return 'profile';
        }

        if (Object.keys(new IBusiness()).every((prop) => Object.keys(profile).indexOf(prop) !== -1)) {
            return 'business';
        }

        if (Object.keys(new ICouple()).every((prop) => Object.keys(profile).indexOf(prop) !== -1)) {
            return 'couple';
        }
    }
}

export default BatchAdapter;
