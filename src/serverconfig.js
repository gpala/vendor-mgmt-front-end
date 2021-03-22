// Set all configuration here 
// Server URLs

const configuration = {
    api_uri:"http://localhost:8000/api",
    auth_uri:'http://localhost:8000/api'
}

const basicAuth = {
    username:'admin',
    password:'nosecret'
}

// Export function to be used in the services 
export function getEnv(){
    return configuration;
}

export function getAuth(){
    return basicAuth;
}