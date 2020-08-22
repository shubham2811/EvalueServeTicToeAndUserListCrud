/**
 * @description - This
 *
 * @interface IButtonProps - <INameOfInterface>
 *
 * @prop {<type>}:<Type name> - <Type description>
 */

export default interface IButtonProps {
  readonly color?: string;
  readonly disabled?: boolean;
  readonly onClick?: (event) => void;
  readonly fullWidth?: boolean;
  readonly className?: string;
  readonly type?: string;
  readonly variant?: any;
  readonly autoFocus?: boolean;
  readonly size?: string;
  readonly href?: any;
  readonly component?: any;
  readonly style?: any;
  readonly activeClassName?:string;
  readonly to?:string
}
