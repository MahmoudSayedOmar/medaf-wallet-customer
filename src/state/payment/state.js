export interface PaymentState{
    orderId:String;
    provider:String;
    orderMessage:String,
    amount:String
}

export const PaymentInitalState:PaymentState={
    orderId:"",
    provider:"",
    orderMessage:"",
    amount:""
};