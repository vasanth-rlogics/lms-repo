const BASE='/server/customer_auth_api/api/auth';

async function request(path,options={}){
  const response=await fetch(`${BASE}${path}`,{credentials:'include',headers:{'Content-Type':'application/json',...(options.headers||{})},...options});
  const data=await response.json().catch(()=>({}));
  if(!response.ok){const error=new Error(data.message||'Request failed');error.status=response.status;error.data=data;throw error;}
  return data;
}

export const authApi={
  me:()=>request('/me'),
  login:(payload)=>request('/login',{method:'POST',body:JSON.stringify(payload)}),
  register:(payload)=>request('/register',{method:'POST',body:JSON.stringify(payload)}),
  logout:()=>request('/logout',{method:'POST'})
};
