export const Constant = {
    API_METHODS: {
        LOGIN: 'login',
        CLIENT: {
            GET_ALL_CLIENT: 'GetAllClients',
            CREATE_CLIENT: 'CreateNewClient',
            GET_CLIENT_BY_ID: 'GetCLIENTByCLIENTId?id=',
            UPDATE_CLIENT: 'UpdateCLIENT',
            DELETE_CLIENT: 'DeleteCLIENTByEmpId?empId=',
        },
        EMPLOYEE: {
            GET_ALL_EMPLOYEE: 'GetAllEmployee',
            CREATE_EMPLOYEE: 'CreateNewEmployee',
            GET_EMPLOYEE_BY_ID: 'GetEmployeeByEmployeeId?id=',
            UPDATE_EMPLOYEE: 'UpdateEmployee',
            DELETE_EMPLOYEE: 'DeleteEmployeeByEmpId?empId=',
            //GET_EMPLOYEE_BY_ID: 'GetEmployeeByEmployeeId'
        },
        MASTER: {
            GET_ALL_ROLES: 'GetAllRoles',
            GET_ALL_DESIGNATIONS: 'GetAllDesignation'
        }
    }
}