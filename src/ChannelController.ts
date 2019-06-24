import { Message } from './Message';

export module ChannelController {

    export interface ChangeChannelRequest {
        channel: ChannelRequest;
        channelMetadata?: ChannelMetadata;
    }

    export interface SkipChannelsRequest {
        channelCount: number;
    }

    export interface Channel {
        number?: string;
        callSign?: string;
        affiliateCallSign?: string;
    }

    export interface ChannelRequest extends Channel {
        uri?: string;
    }

    export interface ChannelMetadata {
        name: string;
        image: string;
    }

    interface Directives {
        'ChangeChannel': ChangeChannelRequest
        'SkipChannels': SkipChannelsRequest
    }
    interface Contexts {
        'channel': Channel
    }
    type Capabilities = keyof Contexts
    export type NamespaceType = 'Alexa.ChannelController';
    export const namespace: NamespaceType = 'Alexa.ChannelController';

    export interface SkillInterface {
        [namespace]: {
            directive: Message.EndpointMessage<Directives, Message.EndpointRequest>
            context: Contexts
            capability: {
                supported: Capabilities
            }
        }
    }

}