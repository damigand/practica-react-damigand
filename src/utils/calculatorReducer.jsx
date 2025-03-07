const reducer = (state, action) => {
    if (action.type === "+") {
        const { first, second, operation } = action.payload;

        if (!first || !second || !operation) return state;

        const result = Number(first) + Number(second);
        return [...state, { first: first, second: second, operation: operation, result: result }];
    }

    if (action.type === "-") {
        const { first, second, operation } = action.payload;

        if (!first || !second || !operation) return state;

        const result = Number(first) - Number(second);
        return [...state, { first: first, second: second, operation: operation, result: result }];
    }

    if (action.type === "x") {
        const { first, second, operation } = action.payload;

        if (!first || !second || !operation) return state;

        const result = Number(first) * Number(second);
        return [...state, { first: first, second: second, operation: operation, result: result }];
    }

    if (action.type === "/") {
        const { first, second, operation } = action.payload;

        if (!first || !second || !operation) return state;

        const result = Number(first) / Number(second);
        return [...state, { first: first, second: second, operation: operation, result: result }];
    }

    if (action.type === "%") {
        const { first, second, operation } = action.payload;

        if (!first || !second || !operation) return state;

        const result = Number(first) % Number(second);
        return [...state, { first: first, second: second, operation: operation, result: result }];
    }

    return state;
};

export default reducer;
