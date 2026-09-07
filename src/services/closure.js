const BASE='/server/customer_auth_api/api/closure';
async function request(path=''){const response=await fetch(`${BASE}${path}`,{credentials:'include'});const data=await response.json().catch(()=>({}));if(!response.ok){const error=new Error(data.message||'Closure request failed.');error.data=data;throw error}return data}
export const closureApi={summary:()=>request('/summary'),certificateUrl:loanId=>`${BASE}/certificate/${encodeURIComponent(loanId)}`};
