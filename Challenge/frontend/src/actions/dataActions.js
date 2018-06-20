export function addBench(weight) {
    return {
        type: "ADD_BENCH",
        payload: weight,
    }
}

export function addSquat(weight) {
    return {
        type: "ADD_SQUAT",
        payload: weight,
    }
}

export function addDeadlift(weight) {
    return {
        type: "ADD_DEADLIFT",
        payload: weight,
    }
}

export function addOverhead(weight) {
    return {
        type: "ADD_OVERHEAD",
        payload: weight,
    }
}

export function addRow(weight) {
    return {
        type: "ADD_ROW",
        payload: weight,
    }
}