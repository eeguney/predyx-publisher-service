import MessageType from "./message.type";
export default interface BalanceType extends MessageType {
    userId: string;
    amountSat: number;
    invoiceId?: string | null;
    type: string;
    requestDate: Date;
    key: string;
}
