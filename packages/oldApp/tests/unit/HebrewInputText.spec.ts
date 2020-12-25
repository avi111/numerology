import {mount, Wrapper} from '@vue/test-utils';
import HebrewInputText from '@/components/HebrewInputText.vue';
import {IHebrewInputText} from '@/interfaces/fields';
import {BFormInput} from 'bootstrap-vue';

let wrapper: Wrapper<HebrewInputText>;

const propsData = {
    inputData: '',
    name: 'firstName',
    placeholder: '',
    required: true,
};

describe('HebrewInputText mount regularly', () => {
    beforeEach(() => {
        wrapper = mount(HebrewInputText, {
            computed: {
                dictionary() {
                    return [];
                },
            },
            propsData,
        });
    });

    // afterEach(() => {
    //     wrapper.destroy();
    // });

    it.skip('matches snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('has input with the desired name', () => {
        const input = wrapper.find('input');
        expect(input.exists()).toBeTruthy();
        const name = input.attributes('name');
        expect(name).toBe(propsData.name);
        expect(wrapper.find({name: propsData.name}).exists()).toBeTruthy();
    });

    it('has b-input inside', () => {
        expect(wrapper.contains(BFormInput)).toBeTruthy();
        const input = wrapper.find(BFormInput);
        expect(input.exists()).toBeTruthy();
    });

    // skipped due to cancellation of html5 pattern in favour of validateOnlyHebrew
    it.skip('doens\'t get non hebrew input', () => {
        const input = wrapper.find('input');
        expect(input.is('input')).toBeTruthy();
        expect((input.element as HTMLInputElement).checkValidity()).toBeFalsy();

        [
            {
                value: 'ttt',
                toBe: false,
            },
            {
                value: '111',
                toBe: false,
            },
            {
                value: 'א1',
                toBe: false,
            },
            {
                value: 'את',
                toBe: true,
            },
        ].forEach((i) => {
            wrapper.setValue(i.value);
            const validity = (input.element as HTMLInputElement).checkValidity();
            expect(validity).toBe(i.toBe);
        });
    });

    // TODO: check / fix / justify skip
    it.skip('emits update on field change', () => {
        const value = 'קת';
        wrapper.setValue(value);
        const emitted = wrapper.emitted();
        expect(emitted.update).toBeTruthy();
        const expected: IHebrewInputText = {
            name: propsData.name,
            payload: value,
        };
        expect(emitted.update).toStrictEqual([[expected]]);
    });
});
