import { Alexa } from './Alexa';
import { Message } from './Message';

export module Video {
    export type ErrorType =
        'ACTION_NOT_PERMITTED_FOR_CONTENT'
        | 'CONFIRMATION_REQUIRED'
        | 'CONTENT_NOT_RECORDABLE'
        | 'NOT_SUBSCRIBED'
        | 'RECORDING_EXISTS'
        | 'STORAGE_FULL'
        | 'TITLE_DISAMBIGUATION_REQUIRED'
        | 'TUNER_OCCUPIED'

    export interface ErrorPayload {
        type: ErrorType;
        message: string;
    }

    interface Events {
        'ErrorResponse': ErrorPayload
    }

    export type NamespaceType = 'Alexa.Video';
    export const namespace: NamespaceType = 'Alexa.Video';

    export interface SkillInterface {
        [namespace]: {
            event: Message.EndpointMessage<Events, Alexa.EndpointResponse>
        }
    }

    interface ExternalIds {
        [key: string]: string
    }

    export interface NamedEntity {
        'MediaType': {
            value: 'Movie' | 'Video' | 'Tv Show'
        }
        'Actor': {
            value: string
            externalIds: ExternalIds
        }
        'Character': {
            value: string
            externalIds: ExternalIds
        }
        'Event': {
            value: string
            externalIds: ExternalIds
        }
        'Franchise': {
            value: string
            externalIds: ExternalIds
        }
        'Genre': {
            value: string
            externalIds: ExternalIds
        }
        'League': {
            value: string
            externalIds: ExternalIds
        }
        'Season': {
            value: string
        }
        'Episode': {
            value: string
        }
        'Sport': {
            value: string
            externalIds: ExternalIds
        }
        'SportsTeam': {
            value: string
            externalIds: ExternalIds
        }
        'Video': {
            value: string
            externalIds: ExternalIds
        },
        'Channel': {
            value: string
            entityMetadata: {
                channelCallSign: string
            }
        }
    }
    export type Entity = {
        [N in keyof NamedEntity]: {
            type: N
        } & NamedEntity[N]
    }[keyof NamedEntity]

    export interface TimeWindow {
        start: Date;
        end: Date;
    }

}
