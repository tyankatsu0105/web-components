export const embedArgs = <T extends object>(args: T) => Object.entries(args).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join(' ')
