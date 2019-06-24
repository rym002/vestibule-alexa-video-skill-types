import { Message } from './Message';
import { Video } from './Video';

export module RemoteVideoPlayer {

    type Operations = 'SearchAndPlay'
        | 'SearchAndDisplayResults';

    export interface RequestPayload {
        entities: Video.Entity[]
        timeWindow: Video.TimeWindow;
    }

    export type NamespaceType = 'Alexa.RemoteVideoPlayer';
    export const namespace: NamespaceType = 'Alexa.RemoteVideoPlayer';

    export interface SkillInterface {
        [namespace]: {
            directive: Message.MultipleMessage<Operations, RequestPayload, Message.EndpointRequest>
            capability: {}
        }
    }
}