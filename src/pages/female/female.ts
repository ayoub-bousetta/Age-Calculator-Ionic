import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FemalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-female',
  templateUrl: 'female.html',
})
export class FemalePage {

  todaysDate;
  yearsdiff;
 birthdate;
 daysdiff;monthsdiff;
 msg;dob;
 iscalculated=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   

  }



  GetAge(){

    let mdate=this.birthdate;
   

    if (!mdate) {
      this.msg="المرجو تحديد تاريخ الميلاد";
      
    }else{


    //Parse BoD
    let yearThen = parseInt(mdate.substring(0,4), 10);
    let monthThen = parseInt(mdate.substring(5,7), 10);
    let dayThen = parseInt(mdate.substring(8,10), 10);


    //let difference=
    let today = new Date();
    
    var birthday = new Date(yearThen, monthThen-1, dayThen);
    
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();
    

 

    









    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
  


    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date();
    var secondDate = new Date(firstDate.getFullYear()+1,monthThen-1, dayThen);
 
 
 
    
    //Calculate difference between days
   
  


          var month_age = Math.floor(day_age/30);
              
          day_age = day_age % 30;
          this.msg="";

        
          
          if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
             this.msg="المرجو تحديد تاريخ الميلاد";
             this.iscalculated=false;
          }
          else {

           
            

            if (day_age >=0 && year_age >=0 && month_age >=0 ) {

                    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
                      this.msg="عيد ميلادك اليوم";
                      this.iscalculated=true;
                      this.daysdiff=day_age 
                      this.yearsdiff=year_age
                      this.monthsdiff=month_age
                      this.dob= Math.floor((secondDate.valueOf()-firstDate.valueOf())/oneDay)
                      
                  }else{
                    this.iscalculated=true;
                  this.daysdiff=day_age 
                  this.yearsdiff=year_age
                  this.monthsdiff=month_age
                  this.dob= Math.floor((secondDate.valueOf()-firstDate.valueOf())/oneDay)
                  }
                    
            
            }else{
              this.iscalculated=false;
              this.msg="هدا التاريخ لم يصل بعد";
            }
            
            
          }

 }


    
  }

  ionViewDidLoad(){
    let dateOBJ=new Date();
    let y=dateOBJ.getFullYear().toString();
    let m=dateOBJ.getMonth()+1;
    m.toString();
    let d=dateOBJ.getDate().toString();

    this.todaysDate= d+"-"+m+"-"+y
  }

}
