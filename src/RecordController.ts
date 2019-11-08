import { Message } from './Message'

export module RecordController {
    export type States = 'RECORDING'
        | 'NOT_RECORDING';

    type Operations = 'StartRecording'
        | 'StopRecording';


    interface Contexts {
        'RecordingState': States
    }
    type Capabilities = keyof Contexts

    export type NamespaceType = 'Alexa.RecordController';
    export const namespace: NamespaceType = 'Alexa.RecordController';

    export interface SkillInterface {
        [namespace]: {
            directive: Message.EmptyMessage<Operations, Message.EndpointRequest>
            context: Contexts
            capability: {
                supported: Capabilities
            }
        }
    }

}

