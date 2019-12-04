import { ITarget } from "./ITarget";
import { Adapter } from "./Adapter";
import { HipAdaptee } from "./HipAdaptee";
import { LegacyAdaptee } from "./LegacyAdaptee";

const hipTarget: ITarget = new Adapter(new HipAdaptee());
const legacyTarget = new Adapter(new LegacyAdaptee());

hipTarget.request();
legacyTarget.request();
