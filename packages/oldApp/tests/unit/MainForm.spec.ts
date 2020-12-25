import {mount, Wrapper} from '@vue/test-utils';
import MainForm from '@/components/MainForm.vue';
import sinon from 'sinon';

let wrapper: Wrapper<MainForm>;

describe('MainForm mount regularly', () => {
    beforeEach(() => {
        wrapper = mount(MainForm, {
            computed: {
                dictionary() {
                    return [];
                },
            },
        });
    });
    it.skip('matches snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('form have all inputs', () => {
        const form = wrapper.find('form');
        expect(form.exists()).toBeTruthy();
        const formData = Array.from(new FormData(form.element as HTMLFormElement).entries());
        const fields = formData.map((el) => el[0]);
        const expectedFields = Object.keys(wrapper.vm.$data.inputProps).length;
        expect(fields.length).toBe(expectedFields);
    });

    it('resets on reset', () => {
        const firstName = 'אבי';
        wrapper.setData({
            inputProps: {
                firstName,
            },
        });

        expect(wrapper.vm.$data.inputProps.firstName).toBe(firstName);

        const form = wrapper.find('form');
        form.trigger('reset');
        expect(wrapper.vm.$data.inputProps.firstName).toBe('');
    });

    // skipped due to cancellation of html5 pattern in favour of validateOnlyHebrew
    it.skip('prevents english chars', () => {
        const english = 'avi';
        const input = wrapper.find('[name="firstName"]');
        input.setValue(english);
        expect((input.element as HTMLInputElement).checkValidity()).toBeFalsy();
        expect(input.classes().indexOf('is-invalid')).not.toBe(-1);
    });

    // skipped due to cancellation of html5 pattern in favour of validateOnlyHebrew
    it.skip('prevents english chars from mixed name', () => {
        const hebrew = 'אבי g';
        const input = wrapper.find('[name="firstName"]');
        input.setValue(hebrew);
        expect((input.element as HTMLInputElement).checkValidity()).toBeFalsy();
        expect(input.classes().indexOf('is-invalid')).not.toBe(-1);
    });

    // skipped due to cancellation of html5 pattern in favour of validateOnlyHebrew
    it.skip('accepts hebrew chars', () => {
        const hebrew = 'אבי';
        const input = wrapper.find('[name="firstName"]');
        input.setValue(hebrew);
        expect((input.element as HTMLInputElement).checkValidity()).toBeTruthy();
        expect(input.classes().indexOf('is-invalid')).toBe(-1);
    });
});

describe('check functionality of MainForm', () => {
    it('triggers onSubmit on submit', () => {
        const onSubmit = sinon.spy();
        wrapper = mount(MainForm, {
            methods: {
                onSubmit,
            },
            computed: {
                dictionary() {
                    return [];
                },
            },
        });
        const form = wrapper.find('form');
        form.trigger('submit');
        expect(onSubmit.called).toBeTruthy();
    });

    it('triggers onReset on reset', () => {
        const spy = sinon.spy();
        wrapper = mount(MainForm, {
            methods: {
                onReset: spy,
            },
            computed: {
                dictionary() {
                    return [];
                },
            },
        });
        const form = wrapper.find('form');
        form.trigger('reset');
        expect(spy.called).toBeTruthy();
    });
});
