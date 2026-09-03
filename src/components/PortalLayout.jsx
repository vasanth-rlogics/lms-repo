import React from 'react';
import {NavLink} from 'react-router-dom';
import {authApi} from '../services/auth';
import './PortalLayout.css';

const items=[
  ['/dashboard','Dashboard','⌂'],
  ['/applications','Applications','▤'],
  ['/documents','Documents','□'],
  ['/payments','Payments','₹'],
  ['/profile','Profile','○']
];

export default function PortalLayout({user,title,subtitle,children}){
  async function signOut(){try{await authApi.logout()}finally{window.location.hash='#/login';window.location.reload()}}
  const email=user?.email||'Customer';
  const initial=email[0]?.toUpperCase()||'U';
  return <div className="portal-shell">
    <aside className="portal-sidebar">
      <div className="portal-brand"><span>L</span><div><strong>LendFlow</strong><small>Personal finance</small></div></div>
      <div className="portal-nav-label">YOUR SPACE</div>
      <nav>{items.map(([to,label,icon])=><NavLink key={to} to={to} className={({isActive})=>`portal-nav-link ${isActive?'active':''}`}><i>{icon}</i><span>{label}</span></NavLink>)}</nav>
      <div className="portal-sidebar-footer">
        <div className="portal-secure"><b/><div><strong>Protected session</strong><small>Private & encrypted</small></div></div>
        <button className="portal-sidebar-signout" onClick={signOut}>Sign out</button>
      </div>
    </aside>
    <main className="portal-main">
      <header className="portal-topbar">
        <div className="portal-page-title"><small>LENDFlow / CUSTOMER</small><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div>
        <div className="portal-user"><span className="portal-avatar">{initial}</span><div><strong>{email}</strong><small>Securely signed in</small></div><button onClick={signOut}>Sign out</button></div>
      </header>
      <div className="portal-content">{children}</div>
    </main>
    <nav className="portal-mobile-nav">{items.map(([to,label,icon])=><NavLink key={to} to={to} className={({isActive})=>`mobile-nav-link ${isActive?'active':''}`}><i>{icon}</i><span>{label}</span></NavLink>)}</nav>
  </div>
}
