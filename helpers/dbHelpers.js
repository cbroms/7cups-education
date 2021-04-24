
export function updateData(data, option) {
    data.forEach((json) => {
        if (json["id"] === 2) {
            json["allResponses"].push(option)
        }
    })
    console.log(data);
}

export default {
    updateData
}