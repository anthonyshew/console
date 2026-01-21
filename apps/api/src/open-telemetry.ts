/**
 * @deprecated Use createOtelLogger from @akashnetwork/logging/otel instead
 */

import { LoggerService } from "@akashnetwork/logging";
import { collectOtel } from "@akashnetwork/logging/otel";

LoggerService.mixin = collectOtel;
