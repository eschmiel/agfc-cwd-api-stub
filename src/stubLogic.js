const handler = async (request) => {
    const {
        gameCheckID,
        hunterCID,
        lastName,
        middleInitial,
        firstName,
        cervidSex,
        dateOfCollectionStart,
        dateOfCollectionEnd,
        county
    } = request.query
    const responseData = []

    if (!gameCheckID && !hunterCID && !lastName) return badRequestResponse(`A gameCheckID, hunterCID or last name query parameter must be set`)
    if (gameCheckID === '0') return serverErrorResponse(`test server error response`)

    switch (gameCheckID) {
        case '00000001':
            responseData.push({
                validData: {
                    contactFirstName: 'Chris',
                    contactMiddleInitial: 'T',
                    contactLastName: 'Markley',
                    contactEmail: 'chris@internet.com',
                    contactPhone: ' 123-123-1234',
                    contactAddress: '123 Test Street',
                    contactCity: 'Test City',
                    contactState: 'Arkansas',
                    contactZipCode: '12345',
                    gameCheckID: '00000001',
                    hunterCID: '87654321',
                    countyOfHarvest: 'Clark',
                    dateOfCollection: '2022-12-05T14:0:00.000Z',
                    cervidSex: 'Unknown'
                }
            })
            break
        case '00000002':
            responseData.push({
                contactFirstName: 'Ted',
                contactMiddleInitial: 'S',
                contactLastName: 'Tedson',
                contactEmail: 'ted@website.com',
                contactPhone: ' 321-321-4321',
                contactAddress: '321 Rocket Road',
                contactCity: 'Queryville',
                contactState: 'Virginia',
                contactZipCode: '54321',
                gameCheckID: '00000002',
                hunterCID: '43214321',
                countyOfHarvest: 'Chicot',
                dateOfCollection: '2023-10-05T14:0:00.000Z',
                cervidSex: 'Female'
            })
            break
        default:
    }

    switch (hunterCID) {
        case '1':
            responseData.push({
                contactFirstName: 'Sam',
                contactMiddleInitial: 'F',
                contactLastName: 'Moore',
                contactEmail: 'sam@moorecorp.com',
                contactPhone: ' 111-111-1111',
                contactAddress: '111 Town Road',
                contactCity: 'Townesville',
                contactState: 'Michigan',
                contactZipCode: '11111',
                gameCheckID: '12312312',
                hunterCID: '1',
                countyOfHarvest: 'Baxter',
                dateOfCollection: '2022-11-05T14:0:00.000Z',
                cervidSex: 'Male'
            })
            break
        case '2':
            responseData.push({
                contactFirstName: 'Lois',
                contactMiddleInitial: 'L',
                contactLastName: 'Lexington',
                contactEmail: 'admin@website.com',
                contactPhone: ' 222-222-2222',
                contactAddress: '11 Lex Lane',
                contactCity: 'Test Town',
                contactState: 'Ohio',
                contactZipCode: '22222',
                gameCheckID: '00000003',
                hunterCID: '2',
                countyOfHarvest: 'Ashley',
                dateOfCollection: '2022-10-05T14:0:00.000Z',
                cervidSex: 'Male'
            })
            break
        default:
    }

    switch (lastName) {
        case 'Smith':
            responseData.push({
                contactFirstName: 'Stan',
                contactMiddleInitial: 'O',
                contactLastName: 'Smith',
                contactEmail: 'Smith@Wesson.com',
                contactPhone: ' 333-333-3333',
                contactAddress: '33 Low Avenue',
                contactCity: "Flannegan's Pond",
                contactState: 'Ohio',
                contactZipCode: '33333',
                gameCheckID: '00000004',
                hunterCID: '2346',
                countyOfHarvest: 'Baxter',
                dateOfCollection: '2022-11-07T14:0:00.000Z',
                cervidSex: 'Unknown'
            })
            break
        default:
    }

    return successResponse(responseData)
}

const successResponse = (body) => {
    return {
        statusCode: 200,
        body
    }
}

const badRequestResponse = (error) => {
    return {
        statusCode: 400,
        body: error
    }
}

const serverErrorResponse = (error) => {
    return {
        statusCode: 500,
        body: error
    }
}

module.exports = { handler }