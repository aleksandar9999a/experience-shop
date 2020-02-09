import { IRecipientInformation } from './recipientInformation.interface';

export interface IShipment {
    listOfItems: Array<string>;
    receiver: string;
    sender: string;
    shipmentId: string;
    status: string;
    recInfo: IRecipientInformation;
}
