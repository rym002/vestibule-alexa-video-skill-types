import { Message } from "./Message";

export module WakeOnLANController {
    export interface Configuration {
        MACAddresses: string[]
    }

    interface Events {
        'WakeUp': {
            payload: {}
            endpoint: Message.EndpointRequest
        }
    }

    export type NamespaceType = 'Alexa.WakeOnLANController';
    export const namespace: NamespaceType = 'Alexa.WakeOnLANController';

    export interface SkillInterface {
        [namespace]: {
            event: Events
            capability: {
                additional: {
                    configuration: Configuration
                }
            }
        }
    }

}