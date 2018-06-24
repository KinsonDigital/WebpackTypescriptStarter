import { Messenger } from "./Messenger";

let messenger = new Messenger();

let holderElement = document.getElementById("msg-holder");

holderElement.innerHTML = messenger.getMessage();