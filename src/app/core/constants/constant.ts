export const Constant = {
    API_METHODS: {
        LOGIN: 'login',
        CLIENT: {
            GET_ALL_CLIENT: 'GetAllClients',
            //CREATE_CLIENT: 'CreateNewClient',
            GET_CLIENT_BY_ID: 'GetClientByClientId?clientId=',
            ADD_UPDATE_CLIENT: 'AddUpdateClient',
            DELETE_CLIENT: 'DeleteClientByClientId?clientId=',
        },
        EMPLOYEE: {
            GET_ALL_EMPLOYEE: 'GetAllEmployee',
            CREATE_EMPLOYEE: 'CreateNewEmployee',
            GET_EMPLOYEE_BY_ID: 'GetEmployeeByEmployeeId?id=',
            UPDATE_EMPLOYEE: 'UpdateEmployee',
            DELETE_EMPLOYEE: 'DeleteEmployeeByEmpId?empId=',
            //GET_EMPLOYEE_BY_ID: 'GetEmployeeByEmployeeId'
        },
        PROJECT: {
            GET_ALL_PROJECT: 'GetAllClientProjects',

            //GET_PROJECT_DTETAILS_BY_ID :'getProjectDetailsById'
        },
        MASTER: {
            GET_ALL_ROLES: 'GetAllRoles',
            GET_ALL_DESIGNATIONS: 'GetAllDesignation'
        }
    }
}