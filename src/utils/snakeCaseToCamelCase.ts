type SnakedCaseObject = { [key: string]: any } | any[];

export function snakeCaseToCamelCase(input: SnakedCaseObject): any {
    if (Array.isArray(input)) {
        return input.map(item => snakeCaseToCamelCase(item));
    } else if (typeof input === "object" && input !== null) {
        const result: { [key: string]: any } = {};
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                const camelKey = key.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
                result[camelKey] = snakeCaseToCamelCase(input[key]);
            }
        }
        return result;
    } else {
        return input;
    }
}
