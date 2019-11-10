import { AllSkills } from '.';
import { Message } from './Message';

export module Alexa {

    export type ErrorType = "ALREADY_IN_OPERATION"
        | "BRIDGE_UNREACHABLE"
        | "ENDPOINT_BUSY"
        | "ENDPOINT_LOW_POWER"
        | "ENDPOINT_UNREACHABLE"
        | "EXPIRED_AUTHORIZATION_CREDENTIAL"
        | "FIRMWARE_OUT_OF_DATE"
        | "HARDWARE_MALFUNCTION"
        | "INTERNAL_ERROR"
        | "INVALID_AUTHORIZATION_CREDENTIAL"
        | "INVALID_DIRECTIVE"
        | "INVALID_VALUE"
        | "NO_SUCH_ENDPOINT"
        | "NOT_CALIBRATED"
        | "NOT_SUPPORTED_IN_CURRENT_MODE"
        | "NOT_IN_OPERATION"
        | "POWER_LEVEL_NOT_SUPPORTED"
        | "RATE_LIMIT_EXCEEDED"
        | "TEMPERATURE_VALUE_OUT_OF_RANGE"
        | "VALUE_OUT_OF_RANGE";

    interface ErrorPayload {
        type: ErrorType
        message: string
    }
    interface ErrorResponse {
        'ErrorResponse': ErrorPayload
    }

    export interface EndpointResponse {
        endpointId: string
    }

    interface Response {
        payload: {}
        endpoint: EndpointResponse
    }

    export type CauseType = 'APP_INTERACTION'
        | 'PHYSICAL_INTERACTION'
        | 'PERIODIC_POLL'
        | 'RULE_TRIGGER'
        | 'VOICE_INTERACTION'

    export interface ChangePayload {
        change:{
            cause:{
                type:CauseType
            }
        } & Context
    }
    interface ChangeReportEvent {
        payload: ChangePayload
        endpoint: Message.EndpointRequest
    }

    export type NamespaceType = 'Alexa';
    export const namespace: NamespaceType = 'Alexa';

    export interface SkillInterface {
        [namespace]: {
            event: {
                'Response': Response
                'StateReport': Response
                'ChangeReport': ChangeReportEvent
            }
            & Message.EndpointMessage<ErrorResponse, EndpointResponse>
            directive: Message.EmptyMessage<'ReportState', Message.EndpointRequest>
        }
    }

    interface Property {
        timeOfSample?: Date
        uncertaintyInMilliseconds?: number
    }

    export type ContextInterfaces = {
        [NS in keyof NamedContext]:
        NamedContext[NS] extends never
        ? never
        : NS
    }[keyof Alexa.NamedContext]

    export type NamedContext = {
        [NS in keyof AllSkills]:
        AllSkills[NS] extends { context: any }
        ? {
            [N in keyof AllSkills[NS]['context']]:
            {
                namespace: NS
                name: N
                value: AllSkills[NS]['context'][N]

            } & Property
        }
        : never
    }

    export type Context = {
        properties: {
            [NS in ContextInterfaces]: {
                [N in keyof NamedContext[NS]]: NamedContext[NS][N]
            }[keyof NamedContext[NS]]
        }[ContextInterfaces][]
    }
}