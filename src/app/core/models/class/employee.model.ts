export class Employee {
    roleId: number
    userName: string
    empCode: string
    empId: number
    empName: string
    empEmailId: string
    empDesignationId: number
    empContactNo: string
    empAltContactNo: string
    empPersonalEmailId: string
    empExpTotalYear: number
    empExpTotalMonth: number
    empCity: string
    empState: string
    empPinCode: string
    empAddress: string
    empPerCity: string
    empPerState: string
    empPerPinCode: string
    empPerAddress: string
    password: string
    ErpEmployeeSkills: ErpEmployeeSkill[]
    ErmEmpExperiences: ErmEmpExperience[]
    constructor() {
        this.roleId = 0
        this.userName = ""
        this.empCode = ""
        this.empId = 0
        this.empName = ""
        this.empEmailId = ""
        this.empDesignationId = 0
        this.empContactNo = ""
        this.empAltContactNo = ""
        this.empPersonalEmailId = ""
        this.empExpTotalYear = 0
        this.empExpTotalMonth = 0
        this.empCity = ""
        this.empState = ""
        this.empPinCode = ""
        this.empAddress = ""
        this.empPerCity = ""
        this.empPerState = ""
        this.empPerPinCode = ""
        this.empPerAddress = ""
        this.password = ""
        this.ErpEmployeeSkills = []
        this.ErmEmpExperiences = []
    }
}

export interface ErpEmployeeSkill {
    empSkillId: number
    empId: number
    skill: string
    totalYearExp: number
    lastVersionUsed: string
}

export interface ErmEmpExperience {
    empExpId: number
    empId: number
    companyName: string
    startDate: string
    endDate: string
    designation: string
    projectsWorkedOn: string
}
