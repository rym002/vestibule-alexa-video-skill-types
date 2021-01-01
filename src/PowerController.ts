import { Message } from './Message';

export module PowerController {
    export type States = 'ON'
        | 'OFF';

    export type Operations = 'TurnOn' | 'TurnOff';

    interface Contexts {
        'powerState': States
    }
    type Capabilities = keyof Contexts

    export type NamespaceType = 'Alexa.PowerController';
    export const namespace: NamespaceType = 'Alexa.PowerController';

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