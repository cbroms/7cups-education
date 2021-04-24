export const step1data = [
    // id 1 stores all the necessary info
    {   "id": 1,
        "correctOption": 1,
        "description": "asdfasdf",
        "options": [{
            1: "Inquire about their situation",
            2: "Suggest a few options",
            3: "Something else"
        }],
        "nextstep": true,
        "modelResponse": null,
        "otherResponses": null,
        "badUsersResponse": null
    },
    // id 2 stores all the user responses
    {
        "id": 2,
        "allResponses": [1,2,3,4,5,6,7,8]
    } 
    // plan to have separate js file to keep the user's choices, probably through sessionStorage
]

export default {
    step1data
}