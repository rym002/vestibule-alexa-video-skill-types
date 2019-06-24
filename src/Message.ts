import { Alexa } from './Alexa';

export module Message {
    export type Scope = BearerToken
        | BearerTokenWithPartition
        | DirectedUserId;

    export type BearerToken = {
        type: 'BearerToken'
        token: string
    }

    type BearerTokenWithPartition = {
        type: 'BearerTokenWithPartition'
        token: string
        partition: string
        userId: string
    }

    type DirectedUserId = {
        type: 'DirectedUserId'
        directedUserId: string
    }

    export interface EndpointCookie extends Alexa.EndpointResponse {
        cookie?: {
            [index: string]: string
        }
    }
    export interface EndpointRequest extends EndpointCookie {
        scope?: Scope
    }


    export interface Header {
        messageId: string
        correlationToken?: string
        payloadVersion: '3'
    }
    export type EmptyMessage<K extends string, E extends Alexa.EndpointResponse> = MultipleMessage<K, {}, E>

    export type MultipleMessage<K extends string, P, E extends Alexa.EndpointResponse> = {
        [Key in K]: {
            payload: P
            endpoint: E
        }
    }

    export type EndpointMessage<T, E extends Alexa.EndpointResponse> = {
        [K in keyof T]: {
            payload: T[K]
            endpoint: E
        }
    }
}
