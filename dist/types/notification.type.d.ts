import MessageType from "./message.type";
export default interface NotificationType extends MessageType {
    notificationTitle: string;
    notificationText: string;
    user: any;
}
