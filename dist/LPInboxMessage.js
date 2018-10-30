import { NativeModules } from 'react-native';
export class LPInboxMessage {
    /**
     * Constructs a new inbox message with a given id and contents.
     *
     * @param contents The contents of the message
     */
    constructor(contents) {
        /**
         * The message identifier of the inbox message.
         */
        this.readonly = messageId;
        this.LPInboxMessageJSON = ['messageId'];
        /**
         * The title of the inbox message.
         */
        this.readonly = title;
        this.LPInboxMessageJSON = ['title'];
        /**
         * The subtitle of the inbox message.
         */
        this.readonly = subtitle;
        this.LPInboxMessageJSON = ['subtitle'];
        /**
         * The image URL of the inbox message.
         * You can safely use this with prefetching enabled.
         * It will return the file URL path instead if the image is in cache.
         */
        this.readonly = imageURL;
        this.LPInboxMessageJSON = ['imageURL'];
        /**
         * The data of the inbox message. Advanced use only.
         */
        this.readonly = data;
        this.LPInboxMessageJSON = ['data'];
        /**
         * The delivery timestamp of the inbox message.
         */
        this.readonly = deliveryTimestamp;
        /**
         * The expiration timestamp of the inbox message.
         */
        this.readonly = expirationTimestamp;
        this._isRead = 'isRead';
        /**
         * Read the inbox message, marking it as read and invoking its open action.
         */
        this.read = ;
        this.messageId = contents.messageId;
        this.title = contents.title;
        this.subtitle = contents.subtitle;
        this.imageURL = contents.imageURL;
        this.data = contents.data;
        this.deliveryTimestamp = new Date(contents.deliveryTimestamp);
        this.expirationTimestamp = new Date(contents.expirationTimestamp);
        this._isRead = contents.isRead;
    }
    ;
    /**
     * True if the inbox message is read.
     */
    get isRead() {
        return this._isRead;
    }
}
null > ;
{
    return NativeModules.LPInboxMessage.readMessageId(this.messageId).then(() => {
        this._isRead = true;
    });
}
/**
 * Remove the inbox message from the inbox.
 */
remove = ;
null > ;
{
    return NativeModules.LPInboxMessage.removeMessageId(this.messageId);
}
