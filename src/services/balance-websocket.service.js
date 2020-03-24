import signalr from "react-native-signalr";
import store from "../../store";
import { updateBalance, connectionSuccess, connectionFail } from "../state/";
import { SR_URL } from "../http-client/constants";

export class BalanceWebsocketService {
  connection: Object;
  proxy: Object;
  constructor() {
    //receives broadcast messages from a hub function, called "SendBalance"
    this.connection = signalr.hubConnection(SR_URL);
    this.connection.logging = true;
    this.proxy = this.connection.createHubProxy("balanceHub");
    console.log(updateBalance);
    debugger;
    this.proxy.on("SendBalance", argOne => {
      debugger;
      store.dispatch(updateBalance(argOne));
    });
    // atempt this.connection, and handle errors
    this.connection
      .start()
      .done(() => {
        console.log("Now connected, this.connection ID=" + this.connection.id);
        store.dispatch(connectionSuccess(this.connection.id));

        // this.proxy.invoke('helloServer', 'Hello Server, how are you?')
        //   .done((directResponse) => {
        //     console.log('direct-response-from-server', directResponse);
        //   }).fail(() => {
        //     console.warn('Something went wrong when calling server, it might not be up and running?')
        //   });
      })
      .fail(() => {
        console.log("Failed");
        store.dispatch(connectionFail());
      });
    //this.connection-handling
    this.connection.connectionSlow(() => {
      console.log(
        "We are currently experiencing difficulties with the this.connection."
      );
      store.dispatch(connectionFail());
    });

    this.connection.error(error => {
      store.dispatch(connectionFail());

      const errorMessage = error.message;
      let detailedError = "";
      if (error.source && error.source._response) {
        detailedError = error.source._response;
      }
      if (
        detailedError ===
        "An SSL error has occurred and a secure this.connection to the server cannot be made."
      ) {
        console.log(
          "When using react-native-signalr on ios with http remember to enable http in App Transport Security https://github.com/olofd/react-native-signalr/issues/14"
        );
      }
      console.debug("SignalR error: " + errorMessage, detailedError);
    });
  }

  // registerMessageAdded(messageAdded: (msg: ChatMessage) => void) {
  //     // get nre chat message from the server
  //     _this.connection.on('MessageAdded', (message: ChatMessage) => {
  //         messageAdded(message);
  //     });
  // }
}
