import { Message } from './Message';

export module EventGateway {

    export type ErrorType = 'INVALID_REQUEST_EXCEPTION'
        | 'INVALID_ACCESS_TOKEN_EXCEPTION'
        | 'SKILL_DISABLED_EXCEPTION'
        | 'INSUFFICIENT_PERMISSION_EXCEPTION'
        | 'SKILL_NOT_FOUND_EXCEPTION'
        | 'REQUEST_ENTITY_TOO_LARGE_EXCEPTION'
        | 'THROTTLING_EXCEPTION'
        | 'INTERNAL_SERVICE_EXCEPTION'
        | 'SERVICE_UNAVAILABLE_EXCEPTION';

    export interface ErrorPayload {
        type: ErrorType;
        message: string;
    }

    export interface AlexaErrorResponse {
        header: Message.Header
        payload: ErrorPayload
    }
}