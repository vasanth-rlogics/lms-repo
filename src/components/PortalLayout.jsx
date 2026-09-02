import React from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import {authApi} from '../services/auth';
import './PortalLayout.css';

const items=[['/dashboard','Dashboard'],['/applications','Applications'],['/documents','Documents'],['/payments','Payments'],['/profile','Profile']];

export default function PortalLayout({user,title,subtitle,children}){
  const navigate=useNavigate();
  async function signOut(){try{await authApi.logout()}finally{navigate('/login',{replace:true})}}
  return <div className="portal-shell">
    <aside className="portal-sidebar">
      <div className="portal-brand"><span>L</span><div><strong>LMS</strong><small>Customer Portal</small></div></div>
      <nav>{items.map(([to,label])=><NavLink key={to} to={to} className={({isActive})=>`portal-nav-link ${isActive?'active':''}`}><i>{label[0]}</i>{label}</NavLink>)}</nav>
      <div className="portal-secure"><b/>Secure session</div>
    </aside>
    <main className="portal-main">
      <header className="portal-topbar"><div><small>CUSTOMER PORTAL</small><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div><div className="portal-user"><span className="portal-avatar">{user?.email?.[0]?.toUpperCase()||'U'}</span><div><strong>{user?.email}</strong><small>Signed in</small></div><button onClick={signOut}>Sign out</button></div></header>
      {children}
    </main>
  </div>;
}
