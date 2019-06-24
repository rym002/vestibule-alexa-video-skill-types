import { AllSkills } from '.';
import { Alexa } from './Alexa';
import { Message } from './Message';

export module Event {

    type Namespaces = {
        [NS in keyof NamedMessage]:
        NamedMessage[NS] extends never
        ? never
        : NS
    }[keyof NamedMessage]

    export type NamedMessage = {
        [NS in keyof AllSkills]:
        AllSkills[NS] extends { event: { [key: string]: any } }
        ? {
            [N in keyof AllSkills[NS]['event']]: {
                event:
                AllSkills[NS]['event'][N]
                & {
                    header: {
                        namespace: NS
                        name: N
                    } & Message.Header
                }
            }
        }
        : never
    }

    export type Message = {
        [NS in Namespaces]: {
            [N in keyof NamedMessage[NS]]: NamedMessage[NS][N]
            & {
                context?: Alexa.Context
            }
        }[keyof NamedMessage[NS]]
    }[Namespaces]
}