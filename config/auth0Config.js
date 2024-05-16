import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https:dev-bm64b4z7y2ypgnup.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck