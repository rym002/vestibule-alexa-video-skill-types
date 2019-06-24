export module EndpointHealth {
    export type States = 'OK'
        | 'UNREACHABLE';

    interface Contexts {
        'connectivity': States
    }
    type Capabilities = keyof Contexts

    export type NamespaceType = 'Alexa.EndpointHealth';
    export const namespace: NamespaceType = 'Alexa.EndpointHealth';

    export interface SkillInterface {
        [namespace]: {
            context: Contexts
            capability: {
                supported: Capabilities
            }
        }
    }
}