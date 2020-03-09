export module PlaybackStateReporter {
    export type States = 'PLAYING'
        | 'PAUSED'
        | 'STOPPED';

    interface Contexts {
        'playbackState': {
            state: States
        }
    }

    type Capabilities = keyof Contexts

    export type NamespaceType = 'Alexa.PlaybackStateReporter';
    export const namespace: NamespaceType = 'Alexa.PlaybackStateReporter';

    export interface SkillInterface {
        [namespace]: {
            context: Contexts
            capability: {
                supported: Capabilities
            }
        }
    }
}