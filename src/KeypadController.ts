import { Message } from './Message';

export module KeypadController {
    export type Keys = 'UP'
        | 'DOWN'
        | 'LEFT'
        | 'RIGHT'
        | 'SELECT'
        | 'PAGE_UP'
        | 'PAGE_DOWN'
        | 'PAGE_LEFT'
        | 'PAGE_RIGHT'
        | 'INFO'
        | 'MORE';

    export type NamespaceType = 'Alexa.KeypadController';
    export const namespace: NamespaceType = 'Alexa.KeypadController';

    export interface SendKeystrokeRequest {
        keystroke: Keys;
    }
    interface Directives {
        'SendKeystroke': SendKeystrokeRequest
    }

    export interface SkillInterface {
        [namespace]: {
            directive: Message.EndpointMessage<Directives, Message.EndpointRequest>
            capability: {
                additional: {
                    keys: Keys[]
                }
            }
        }
    }
}
