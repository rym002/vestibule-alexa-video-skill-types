import { Message } from './Message';

export module Authorization {

    type GrantType = 'OAuth2.AuthorizationCode';
    type ErrorType = 'ACCEPT_GRANT_FAILED';

    export interface Grant {
        type: GrantType;
        code: string;
    }

    export interface AcceptGrantRequest {
        grant: Grant;
        grantee: Message.BearerToken;
    }

    interface Directives {
        'AcceptGrant': {
            payload: AcceptGrantRequest
        }
    }
    interface Events {
        'AcceptGrant.Response': {
            payload: {}
        }
        'ErrorResponse': {
            payload: {
                type: ErrorType
                message: string
            }
        }
    }

    export type NamespaceType = 'Alexa.Authorization';
    export const namespace: NamespaceType = 'Alexa.Authorization';

    export interface SkillInterface {
        [namespace]: {
            directive: Directives
            event: Events
        }
    }
}