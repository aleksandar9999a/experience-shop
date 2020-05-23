import { IRecipientInformation } from './recipientInformation.interface';
import { IItem } from './item.interface';

export interface IShipment {
    listOfItems: Array<IItem>;
    receiver: string;
    sender: string;
    id: string;
    status: string;
    recInfo: IRecipientInformation;
}
