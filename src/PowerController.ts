import { Message } from './Message';

export module PowerController {
    export type States = 'ON'
        | 'OFF';

    type PowerOperations = 'TurnOn' | 'TurnOff';

    interface Contexts {
        'powerState': States
    }
    type Capabilities = keyof Contexts

    export type NamespaceType = 'Alexa.PowerController';
    export const namespace: NamespaceType = 'Alexa.PowerController';

    export interface SkillInterface {
        [namespace]: {
            directive: Message.EmptyMessage<PowerOperations, Message.EndpointRequest>
            context: Contexts
            capability: {
                supported: Capabilities
            }
        }
    }
}