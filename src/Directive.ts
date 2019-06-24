import { AllSkills } from '.';
import { Message } from './Message';

export module Directive {
    export type Namespaces = {
        [NS in keyof NamedMessage]:
        NamedMessage[NS] extends never
        ? never
        : NS
    }[keyof NamedMessage]

    export type NamedMessage = {
        [NS in keyof AllSkills]:
        AllSkills[NS] extends { directive: { [key: string]: any } }
        ? {
            [N in keyof AllSkills[NS]['directive']]: {
                header: {
                    namespace: NS
                    name: N
                } & Message.Header
            } & AllSkills[NS]['directive'][N]
        }
        : never
    }

    export type Message = {
        directive: {
            [NS in Namespaces]: {
                [N in keyof NamedMessage[NS]]: NamedMessage[NS][N]
            }[keyof NamedMessage[NS]]
        }[Namespaces]
    }
}