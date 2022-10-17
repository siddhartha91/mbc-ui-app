export interface TransactionsModel{
     transId : number,
     reference: number,
     customerNo : string,
     customerName : string,
     address : string,
     phone : string,
     transferAmount : string,
     transferCurrency : string,
     beneficiaryBank: string
     status: boolean
}
