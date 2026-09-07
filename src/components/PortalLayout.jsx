import React from 'react';
import {NavLink} from 'react-router-dom';
import {authApi} from '../services/auth';
import './PortalLayout.css';

const workspace=[['/dashboard','Dashboard','▦'],['/applications','Applications','▤'],['/payments','Repayments','↻'],['/documents','Documents','□']];
const account=[['/profile','Profile','○']];
export default function PortalLayout({user,title,subtitle,children}){
 async function signOut(){try{await authApi.logout()}finally{window.location.hash='#/login';window.location.reload()}}
 const email=user?.email||'Customer';const initial=email[0]?.toUpperCase()||'U';
 const link=([to,label,icon])=><NavLink key={to} to={to} className={({isActive})=>`portal-nav-link ${isActive?'active':''}`}><i>{icon}</i><span>{label}</span></NavLink>;
 return <div className="portal-shell"><aside className="portal-sidebar"><div className="portal-brand"><span>LF</span><div><strong>LendFlow Finance</strong><small>Customer portal</small></div></div><div className="portal-nav-label">WORKSPACE</div><nav>{workspace.map(link)}</nav><div className="portal-nav-label account-label">ACCOUNT</div><nav>{account.map(link)}</nav><div className="portal-sidebar-footer"><div className="portal-secure"><b/><div><strong>Secure session</strong><small>Protected customer access</small></div></div><button onClick={signOut}>Sign out</button></div></aside><main className="portal-main"><header className="portal-topbar"><div><small>CUSTOMER WORKSPACE</small><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div><div className="portal-user"><span>{initial}</span><div><strong>{email}</strong><small>Customer account</small></div><button onClick={signOut}>Sign out</button></div></header><div className="portal-content">{children}</div></main><nav className="portal-mobile-nav">{[...workspace,...account].map(link)}</nav></div>
}
