export const emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const mobileRe=/^[6-9][0-9]{9}$/;
export const postalRe=/^[0-9A-Za-z][0-9A-Za-z\s-]{2,9}$/;

export function validateField(name,value){
  const v=typeof value==='string'?value.trim():value;
  switch(name){
    case'customerName':if(!v)return'Customer name is required.';if(!/^[A-Za-z][A-Za-z .'-]{1,79}$/.test(v))return'Enter a valid customer name.';if(v.split(/\s+/).filter(Boolean).length<2)return'Enter your first and last name.';return'';
    case'email':if(!v)return'Email address is required.';return emailRe.test(v)?'':'Enter a valid email address.';
    case'mobileNumber':if(!v)return'Mobile number is required.';return mobileRe.test(String(v).replace(/[\s-]/g,''))?'':'Enter a valid 10-digit Indian mobile number.';
    case'dateOfBirth':{if(!v)return'Date of birth is required.';const d=new Date(`${v}T00:00:00`),t=new Date();if(Number.isNaN(d.getTime())||d>t)return'Enter a valid date of birth.';let age=t.getFullYear()-d.getFullYear();const m=t.getMonth()-d.getMonth();if(m<0||(m===0&&t.getDate()<d.getDate()))age--;if(age<18)return'You must be at least 18 years old.';if(age>100)return'Enter a valid date of birth.';return'';}
    case'employmentType':return v?'':'Select an employment type.';
    case'annualIncome':if(v===''||v==null)return'Annual income is required.';return Number.isFinite(Number(v))&&Number(v)>0?'':'Annual income must be greater than zero.';
    case'employerName':return !v||v.length>=2?'':'Enter a valid employer name.';
    case'officialEmail':return !v||emailRe.test(v)?'':'Enter a valid official email address.';
    case'workExperience':return v===''||v==null||(Number.isFinite(Number(v))&&Number(v)>=0&&Number(v)<=60)?'':'Enter valid work experience.';
    case'address':if(!v)return'Address is required.';return v.length>=5?'':'Enter a complete address.';
    case'city':if(!v)return'City / District is required.';return v.length>=2?'':'Enter a valid city or district.';
    case'state':return !v||v.length>=2?'':'Enter a valid state or province.';
    case'postalCode':return !v||postalRe.test(v)?'':'Enter a valid postal code.';
    case'country':return v?'':'Country is required.';
    case'password':if(!v)return'Password is required.';if(v.length<10)return'Use at least 10 characters.';return /[A-Z]/.test(v)&&/[a-z]/.test(v)&&/[0-9]/.test(v)?'':'Include uppercase, lowercase and a number.';
    case'privacyConsent':return v?'':'You must accept the privacy consent.';
    default:return'';
  }
}
