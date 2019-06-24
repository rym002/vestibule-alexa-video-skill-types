import { Message } from './Message';

export module SeekController {

    export interface RequestPayload {
        deltaPositionMilliseconds: number;
    }

    export interface ResponsePayload {
        properties: [{
            name: 'positionMilliseconds';
            value: number;
        }]
    }
    interface Directives {
        'AdjustSeekPosition': RequestPayload
    }

    interface Events {
        'StateReport': {
            payload: ResponsePayload
        }
    }
    export type NamespaceType = 'Alexa.SeekController';
    export const namespace: NamespaceType = 'Alexa.SeekController';

    export interface SkillInterface {
        [namespace]: {
            directive: Message.EndpointMessage<Directives, Message.EndpointRequest>
            capability: {}
            event: Events
        }
    }

}