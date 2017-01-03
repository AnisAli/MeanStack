import {Injectable } from '@angular/core'


declare var sweetAlert:any;

@Injectable() 
export class AlertService{
        

    static ShowSucessAlert(title:string, message:string):void{
        sweetAlert(title, message, "success");
    }

     static ShowErrorAlert(title:string, message:string):void{
        sweetAlert(title, message, "error");
    }

    static ShowWarningAlert(title:string, message:string):void{
        sweetAlert(title, message, "warning");
    }

    static ShowInfoAlert(title:string, message:string):void{
        sweetAlert(title, message, "warning");
    }
}