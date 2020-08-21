/**
 * @interface IFormProps - Interface holding the properties of Form.
 *
 * @prop {any} onSubmit - On Submit event property.
 * @prop {any} handleSubmit - Submit event handler.
 * @prop {object} initialValues - Initial values of the components.
 * @prop {sting} form - Form name
 * @prop {(string, string) => void} change - Method that can be used to update the component value.
 */
export default interface IFormProps {
    readonly onSubmit: any;
    readonly handleSubmit: any;
    readonly initialValues: object;
    readonly form: string;
    readonly change: (name: string, value: string) => void;
    readonly reset: () => void;
    readonly onSubmitFail: any;
    readonly valid: boolean;
    readonly onKeyPress?: (event) => void;
  }
  