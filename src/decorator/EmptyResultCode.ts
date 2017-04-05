import {defaultMetadataArgsStorage} from "../index";
import {ResponseHandlerTypes} from "../metadata/types/ResponsePropertyTypes";
import {ResponseHandlerMetadataArgs} from "../metadata/args/ResponseHandleMetadataArgs";

/**
 * This decorator is used when user wants to get some specific HTTP code on empty result returned by a controller.
 *
 * @deprecated "empty" is too abstract. Use @OnNull, @OnUndefined or custom logic to fix this issue
 */
export function EmptyResultCode(code: number) {
    return function (object: Object, methodName: string) {
        const metadata: ResponseHandlerMetadataArgs = {
            value: code,
            target: object.constructor,
            method: methodName,
            type: ResponseHandlerTypes.EMPTY_RESULT_CODE
        };
        defaultMetadataArgsStorage().responseHandlers.push(metadata);
    };
}

