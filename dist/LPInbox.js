import { NativeModules } from 'react-native';
import { LPInboxMessage } from './LPInboxMessage';
export const LPInbox = {
    /**
     * Returns the number of all inbox messages on the device.
     */
    count: () => {
        return NativeModules.LPInbox.count();
    },
    /**
     * Returns the number of the unread inbox messages on the device.
     */
    unreadCount: () => {
        return NativeModules.LPInbox.unreadCount();
    },
    /**
     * Returns the identifiers of all inbox messages on the device sorted in ascending
     * chronological order, i.e. the id of the oldest message is the first one, and the most
     * recent one is the last one in the array.
     */
    messagesIds: () => {
        return NativeModules.LPInbox.messagesIds();
    },
    /**
     * Returns an array containing all of the inbox messages (as LPInboxMessage objects)
     * on the device, sorted in ascending chronological order, i.e. the oldest message is the
     * first one, and the most recent one is the last one in the array.
     */
    allMessages: () => {
        return NativeModules.LPInbox.allMessages().then((messages) => {
            return messages.map(json => new LPInboxMessage(json));
        });
    },
    /**
     * Returns an array containing all of the unread inbox messages on the device, sorted
     * in ascending chronological order, i.e. the oldest message is the first one, and the
     * most recent one is the last one in the array.
     */
    unreadMessages: () => {
        return NativeModules.LPInbox.unreadMessages().then((messages) => {
            return messages.map(json => new LPInboxMessage(json));
        });
    },
    /**
     * Returns the inbox messages associated with the given messageId identifier.
     */
    messageForId: (messageId) => {
        return NativeModules.LPInbox.messageForId(messageId)
            .then((json) => new LPInboxMessage(json));
    },
    /**
     * Call this method if you don't want Inbox images to be prefetched.
     * Useful if you only want to deal with image URL.
     */
    disableImagePrefetching: () => {
        return NativeModules.LPInbox.disableImagePrefetching();
    }
};
