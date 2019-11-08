import { Message } from './Message';

export module PlaybackController {
    export type Operations = 'Play'
        | 'Pause'
        | 'Stop'
        | 'StartOver'
        | 'Previous'
        | 'Next'
        | 'Rewind'
        | 'FastForward';

    export type NamespaceType = 'Alexa.PlaybackController';
    export const namespace: NamespaceType = 'Alexa.PlaybackController';

    export interface SkillInterface {
        [namespace]: {
            directive: Message.EmptyMessage<Operations, Message.EndpointRequest>
            capability: {
                additional: {
                    supportedOperations: Operations[]
                }
            }
        }
    }
}
