export interface IInputTextBoxProps {
  readonly type?: string;
  readonly placeholder?: string;
  readonly name:string;
  readonly label: string;
  readonly children?: JSX.Element | JSX.Element[] | string;
  readonly required?:boolean;
  readonly value?:string;
  readonly validation?: any[];
  readonly fullWidth?:boolean;
  readonly variant?:string;
  readonly margin?:any;
  readonly isformfield?:boolean;
  readonly onChange?:any;
  readonly className?:string
  readonly  shrink?: boolean;
  readonly onIconClick?:any;
  readonly showEyeIcon?:boolean
  readonly size?:any
  
}
