const handler = async (request) => {
    const {
        dateOfCollectionStart,
        gameCheckID,
        hunterCID,
        lastName,
        middleInitial,
        firstName,
        cervidSex,
        dateOfCollectionEnd,
        county,
        cooperatorID,
        phone
    } = request.query
    const responseData = []

    if (!dateOfCollectionStart) return badRequestResponse(`A dateOfCollectionStart query parameter without a timestamp must be set`)
    if (!gameCheckID && !hunterCID && !lastName && !phone) return badRequestResponse(`A gameCheckID, hunterCID, phone or lastName query parameter must be set`)
    if (!validateMiniumLength(gameCheckID)) return badRequestResponse('gameCheckID query parameter must have at least 3 digits')
    if (!validateMiniumLength(hunterCID)) return badRequestResponse('hunterCID query parameter must have at least 3 digits')

    if (gameCheckID === '0') return serverErrorResponse(`test server error response`)

    switch (gameCheckID) {
        case '00000001':
            responseData.push({
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
                dateOfCollection: '2022-12-05',
                cervidSex: 'Unknown'
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
                dateOfCollection: '2023-10-05',
                cervidSex: 'Female'
            })
            break
        case '88888888':
            responseData.push({
                contactFirstName: 'Travis',
                contactMiddleInitial: 'T',
                contactLastName: 'Walters',
                contactEmail: 'traviswltrs@yahoo.com',
                contactPhone: '123-456-7890',
                contactAddress: '123 Travis Road',
                contactCity: 'Travis Town',
                contactState: 'Florida',
                contactZipCode: '11111',
                gameCheckID: '88888888',
                hunterCID: '88228822',
                countyOfHarvest: 'Arkansas',
                dateOfCollection: '2023-12-20',
                cervidSex: 'Female'
            })
            break
        case '77777777':
            responseData.push({
                contactFirstName: 'Maya',
                contactMiddleInitial: 'T',
                contactLastName: 'Bowens',
                contactEmail: 'maya.bowens@timmons.com',
                contactPhone: '098-765-4321',
                contactAddress: '098 Maya Street',
                contactCity: 'Mayaville',
                contactState: 'Virginia',
                contactZipCode: '222222',
                gameCheckID: '77777777',
                hunterCID: '123321',
                countyOfHarvest: 'Arkansas',
                dateOfCollection: '2023-12-25',
                cervidSex: 'Male'
            })
            break
        case '55555555':
            responseData.push({
                contactFirstName: 'AJ',
                contactLastName: 'Riggs',
                contactEmail: 'a.j.riggs@agfc.ar.gov',
                contactPhone: '654-654-6543',
                contactAddress: '342 AJ Avenue',
                contactCity: 'AJ Town',
                contactState: 'Arkansas',
                contactZipCode: '54321',
                gameCheckID: '55555555',
                hunterCID: '76534',
                countyOfHarvest: 'Arkansas',
                dateOfCollection: '2023-11-18',
                cervidSex: 'Male'
            })
            break
        default:
    }

    switch (hunterCID) {
        case '123':
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
                hunterCID: '123',
                countyOfHarvest: 'Baxter',
                dateOfCollection: '2022-11-05',
                cervidSex: 'Male'
            })
            break
        case '321':
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
                hunterCID: '321',
                countyOfHarvest: 'Ashley',
                dateOfCollection: '2022-10-05',
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

    switch (firstName) {
        case 'Pablo':
            responseData.push({
                contactFirstName: 'Pablo',
                contactMiddleInitial: 'O',
                contactLastName: 'Smith',
                contactEmail: 'pSmith@Wesson.com',
                contactPhone: '1234567890',
                contactAddress: '33 High Road',
                contactCity: "Test Town",
                contactState: 'Idaho',
                contactZipCode: '11111',
                gameCheckID: '00000005',
                hunterCID: '23467',
                countyOfHarvest: 'Baxter',
                dateOfCollection: '2022-11-07T14:0:00.000Z',
                cervidSex: 'Unknown'
            })
            break
        default:
    }

    switch (middleInitial) {
        case 'M':
            responseData.push({
                contactFirstName: 'Stan',
                contactMiddleInitial: 'M',
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

    switch (cervidSex) {
        case 'Male':
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
                cervidSex: 'Male'
            })
            break
        default:
    }

    switch (county) {
        case 'Chicot':
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
                countyOfHarvest: 'Chicot',
                dateOfCollection: '2022-11-07T14:0:00.000Z',
                cervidSex: 'Unknown'
            })
            break
        default:
    }

    switch (dateOfCollectionStart) {
        case '11/03/2023':
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
                dateOfCollection: '2023-11-03T14:0:00.000Z',
                cervidSex: 'Unknown'
            })
            break
        default:
    }

    switch (dateOfCollectionEnd) {
        case '11/02/2023':
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
                dateOfCollection: '2023-11-02T14:0:00.000Z',
                cervidSex: 'Unknown'
            })
            break
        default:
    }

    switch (cooperatorID) {
        case '14':
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
                countyOfHarvest: 'Chicot',
                dateOfCollection: '2022-11-07T14:0:00.000Z',
                cervidSex: 'Unknown',
                cooperator: '14'
            })
            break
        default:
    }

    switch (phone) {
        case '0987654321':
            responseData.push({
                contactFirstName: 'Stan',
                contactMiddleInitial: 'O',
                contactLastName: 'Smith',
                contactEmail: 'Smith@Wesson.com',
                contactPhone: '0987654321',
                contactAddress: '33 Low Avenue',
                contactCity: "Flannegan's Pond",
                contactState: 'Ohio',
                contactZipCode: '33333',
                gameCheckID: '00000004',
                hunterCID: '2346',
                countyOfHarvest: 'Chicot',
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

const validateMiniumLength = (value) => {
    if (value && value.length && value.length < 3) return false
    return true
}

module.exports = { handler }