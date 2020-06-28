
import * as types from "./actions";

import {paymentService} from "../../services"

export type ON_SELECT_ACTION = { type: String, payload: any };

export function SelectPaymentProvider(model) {
    return async (dispatch, getState) => {
        const state = getState();
        const data ={};
        data['CardNo']=state.authorization.CardNo;
        data['Amount']=model.amount;
        let response=await paymentService.MakeOrder(
            data,
            state.authorization.token
        )
         result=await response.data;
         resultData={};
         resultData['result']=result;
         resultData['amount']=model.amount;
         debugger;                                                                  
        if(response.data.Code===1)
        {
            dispatch(onSelectPayment(resultData));
        }

    }
}


export function onSelectPayment(data): ON_SELECT_ACTION {
    debugger;
    return { type: types.SELECT_PAYMENT, payload: data }
}