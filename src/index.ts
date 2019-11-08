import { ChannelController } from './ChannelController';
import { EndpointHealth } from './EndpointHealth';
import { PlaybackController } from './PlaybackController';
import { PlaybackStateReporter } from './PlaybackStateReporter';
import { PowerController } from './PowerController';
import { RecordController } from './RecordController';
import { SeekController } from './SeekController';
import { Discovery } from './Discovery';
import { Alexa } from './Alexa';
import { Authorization } from './Authorization';
import { Video } from './Video';
import { WakeOnLANController } from './WakeOnLANController';
import { RemoteVideoPlayer } from './RemoteVideoPlayer';
import { Launcher } from './Launcher';
import { VideoRecorder } from './VideoRecorder';
import { KeypadController } from './KeypadController'

export * from './Discovery';
export * from './Message';
export * from './PlaybackController';
export * from './Video';
export * from './RecordController';
export * from './PowerController';
export * from './PlaybackStateReporter';
export * from './ChannelController';
export * from './WakeOnLANController';
export * from './Authorization';
export * from './EventGateway';
export * from './SeekController';
export * from './EndpointHealth';
export * from './RemoteVideoPlayer';
export * from './Launcher'
export * from './VideoRecorder';
export * from './Directive';
export * from './Event';
export * from './Alexa';
export * from './RemoteVideoPlayer';
export * from './KeypadController';

export type AllSkills = ChannelController.SkillInterface
    & EndpointHealth.SkillInterface
    & PlaybackController.SkillInterface
    & PlaybackStateReporter.SkillInterface
    & PowerController.SkillInterface
    & RecordController.SkillInterface
    & SeekController.SkillInterface
    & Discovery.SkillInterface
    & Video.SkillInterface
    & Alexa.SkillInterface
    & Authorization.SkillInterface
    & WakeOnLANController.SkillInterface
    & RemoteVideoPlayer.SkillInterface
    & Launcher.SkillInterface
    & VideoRecorder.SkillInterface
    & KeypadController.SkillInterface
