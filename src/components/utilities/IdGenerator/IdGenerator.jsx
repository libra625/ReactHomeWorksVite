export function* idGenerator(initialValue) {
    let currentValue = initialValue + 1;
    while (true) {
        yield currentValue++;
    }
}
