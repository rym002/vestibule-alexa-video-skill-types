import { Message } from './Message';

export module Launcher {
    type States = Targets;

    export type Targets = { identifier: 'amzn1.alexa-ask-target.shortcut.87246', name: 'Accessibility Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.39940', name: 'Appearance Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.94081', name: 'Bluetooth Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.50500', name: 'Collection' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.99860', name: 'Control Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.42297', name: 'Diagnostic Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.12664', name: 'Display Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.69247', name: 'DVR' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.45334', name: 'Energy Saver' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.83028', name: 'Featured' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.68228', name: 'Guide' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.21061', name: 'Guide Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.34800', name: 'History Manager' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.33122', name: 'Home' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.82117', name: 'Info' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.83525', name: 'Inputs' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.08874', name: 'Internet Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.12746', name: 'Journey' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.41513', name: 'Journey Manager' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.91866', name: 'Kids' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.14414', name: 'My Profile' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.58566', name: 'Network Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.95950', name: 'On Demand' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.84333', name: 'On Now' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.77269', name: 'One Pass Manager' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.51213', name: 'OTA Antenna Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.70110', name: 'Parental Controls' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.99242', name: 'Phone Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.06715', name: 'Picture in Picture' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.07345', name: 'Power Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.77293', name: 'Prime Time Anytime' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.66375', name: 'Recall' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.52304', name: 'Recordings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.67709', name: 'Remote Control Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.48625', name: 'Scheduled Recordings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.07395', name: 'Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.13633', name: 'Shaka' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.63534', name: 'Timer Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.49016', name: 'TV Display Settings' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.82307', name: 'VOD' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.68844', name: 'Watchlist' }
        | { identifier: 'amzn1.alexa-ask-target.shortcut.51649', name: 'What to Watch' };


    interface Contexts {
        'target': States
    }
    type Capabilities = keyof Contexts

    export type NamespaceType = 'Alexa.Launcher';
    export const namespace: NamespaceType = 'Alexa.Launcher';
    interface Directives {
        'LaunchTarget': Targets
    }
    export interface SkillInterface {
        [namespace]: {
            capability: {}
            context: Contexts
            directive: Message.EndpointMessage<Directives, Message.EndpointRequest>
        }
    }
}