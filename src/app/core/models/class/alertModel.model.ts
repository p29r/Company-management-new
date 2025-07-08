import { ALERTCLASS } from "../../constants/alert.enum";

export class AlertModel {
    title: string;
    message: string;
    className: ALERTCLASS;
  ALERTCLASS: any;

    constructor() {
        this.className = ALERTCLASS.SUCCESS;
        this.title = 'Success';
        this.message = 'API success'
    }
}