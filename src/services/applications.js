const BASE='/server/customer_auth_api/api/applications';
const SYNC_BASE='/server/customer_auth_api/api/approval-sync';
const DISBURSEMENT_BASE='/server/customer_auth_api/api/disbursement';
async function request(path='',options={}){const response=await fetch(`${BASE}${path}`,{credentials:'include',headers:{'Content-Type':'application/json',...(options.headers||{})},...options});const data=await response.json().catch(()=>({}));if(!response.ok){const error=new Error(data.message||'Application request failed.');error.data=data;throw error}return data}
async function syncRequest(id){const response=await fetch(`${SYNC_BASE}/${encodeURIComponent(id)}/sync`,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:'{}'});const data=await response.json().catch(()=>({}));if(!response.ok){const error=new Error(data.message||'Approval sync failed.');error.data=data;throw error}return data}
async function disbursementRequest(id){const response=await fetch(`${DISBURSEMENT_BASE}/${encodeURIComponent(id)}`,{credentials:'include'});const data=await response.json().catch(()=>({}));if(!response.ok){const error=new Error(data.message||'Unable to load disbursement details.');error.data=data;throw error}return data}
export const applicationsApi={
 list:()=>request(),
 get:id=>request(`/${encodeURIComponent(id)}`),
 loanTypes:()=>request('/loan-types'),
 create:payload=>request('',{method:'POST',body:JSON.stringify(payload)}),
 runCreditCheck:(id,consent)=>request(`/${encodeURIComponent(id)}/credit-check`,{method:'POST',body:JSON.stringify({consent})}),
 routeApproval:id=>request(`/${encodeURIComponent(id)}/route-approval`,{method:'POST',body:'{}'}),
 syncApproval:id=>syncRequest(id),
 getDisbursement:id=>disbursementRequest(id)
};
