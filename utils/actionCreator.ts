interface RequestType {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
}

export function createRequestTypes(base: string): RequestType {
    return <RequestType>{
        REQUEST: `${base}_REQUEST`,
        SUCCESS: `${base}_SUCCESS`,
        FAILURE: `${base}_FAILURE`
    };
}

export function makeActionCreator(type: string, ...argNames: any[]) {
    return (...args: any[]) => {
        let action: any = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    };
}