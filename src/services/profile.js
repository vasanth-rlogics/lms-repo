const BASE='/server/customer_auth_api/api/profile';
async function request(options={}){const r=await fetch(BASE,{credentials:'include',headers:{'Content-Type':'application/json',...(options.headers||{})},...options});const d=await r.json().catch(()=>({}));if(!r.ok){const e=new Error(d.message||'Profile request failed.');e.data=d;throw e}return d}
export const profileApi={get:()=>request(),update:data=>request({method:'PATCH',body:JSON.stringify(data)})};
