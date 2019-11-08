import { Message } from './Message';
import { Video } from './Video';

export module VideoRecorder {

    export type Qualifier = {
        name: 'ALL'
        | 'NEXT'
        | 'NEW'
        | 'WATCHED'
    };

    export type RecordingStatus = 'SCHEDULED'
        | 'STARTED';

    export interface RequestPayload {
        entities: Video.Entity[];
        quantifier: Qualifier;
        timeWindow: Video.TimeWindow;
    }

    export interface SearchAndRecordResponsePayload {
        recordingStatus: RecordingStatus
    }

    export type NamespaceType = 'Alexa.VideoRecorder';
    export const namespace: NamespaceType = 'Alexa.VideoRecorder';

    export interface ResponsePayload {
        recordingStatus: RecordingStatus
    }
    interface Directives {
        'SearchAndRecord': RequestPayload
        'CancelRecording': RequestPayload
        'DeleteRecording': RequestPayload
    }

    interface Contexts {
        'isExtendedRecordingGUIShown': boolean
        'storageLevel': number
    }
    interface Events {
        'Alexa.SearchAndRecordResponse': {
            payload: ResponsePayload
        }
    }
    export interface SkillInterface {
        [namespace]: {
            directive: Message.EndpointMessage<Directives, Message.EndpointRequest>
            capability: {}
            context: Contexts
            event: Events
        }
    }
}