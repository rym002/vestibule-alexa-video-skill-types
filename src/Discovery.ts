import { AllSkills } from './';
import { Message } from './Message';

export module Discovery {
    export type CapabilityInterfaces = {
        [NS in keyof NamedCapabilities]:
        NamedCapabilities[NS] extends never
        ? never
        : NS
    }[keyof NamedCapabilities]

    export type NamedCapabilities = {
        [NS in keyof AllSkills]:
        AllSkills[NS] extends { capability: { supported: any } }
        ? {
            interface: NS
            properties: {
                supported: {
                    name: AllSkills[NS]['capability']['supported']
                }[]
            }
        } & ReportableCapability
        : never
        | AllSkills[NS] extends { capability: { additional: any } }
        ? AllSkills[NS]['capability']['additional']
        & {
            interface: NS
        } : never
        | AllSkills[NS] extends { capability: {} }
        ? {
            interface: NS
        }
        : never
    }

    export type Capabilities = {
        [NS in CapabilityInterfaces]: NamedCapabilities[NS]
    }[CapabilityInterfaces] & CapabilityBase


    export interface Endpoint extends Message.EndpointCookie {
        manufacturerName: string
        friendlyName: string
        description: string
        displayCategories: DisplayCategoryType[]
        capabilities: Capabilities[]
    }

    export type DisplayCategoryType =
        "ACTIVITY_TRIGGER"
        | "CAMERA"
        | "CONTACT_SENSOR"
        | "DOOR"
        | "DOORBELL"
        | "LIGHT"
        | "MICROWAVE"
        | "MOTION_SENSOR"
        | "OTHER"
        | "SCENE_TRIGGER"
        | "SMARTLOCK"
        | "SMARTPLUG"
        | "SPEAKER"
        | "SWITCH"
        | "TEMPERATURE_SENSOR"
        | "THERMOSTAT"
        | "TV";


    export type CapabilityType =
        'AlexaInterface';


    interface CapabilityBase {
        type: CapabilityType
        version: '3'
    }

    interface ReportableCapability {
        proactivelyReported?: boolean
        retrievable?: boolean
    }
    export type NamespaceType = 'Alexa.Discovery';
    export const namespace: NamespaceType = 'Alexa.Discovery';

    interface Directives {
        'Discover': {
            payload: DiscoverPayload
        }
    }

    interface Events {
        'Discover.Response': {
            payload: ResponsePayload
        }
    }
    export interface SkillInterface {
        [namespace]: {
            directive: Directives
            event: Events
        }
    }
    export interface DiscoverPayload {
        scope: Message.Scope
    }

    export interface ResponsePayload {
        endpoints: Endpoint[]
    }
}
