/**
 * @description - This
 *
 * @interface ICardList - <INameOfInterface>
 *
 * @prop {<type>}:<Type name> - <Type description>
 */

export default interface ICardListProps {
  readonly headers: any[];
  readonly rowData: any;
  readonly handleChangePage?:any;
  readonly onChangeRowsPerPage?: (event) => any;
  // readonly handleActionButtonClick?: (row) => any;
  readonly page?:number
  readonly [key: string]: any;
}
