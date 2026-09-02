import React from 'react';
import PortalLayout from '../components/PortalLayout';
import './Profile.css';
export default function Profile({user}){return <PortalLayout user={user} title="Profile" subtitle="Review and manage your customer profile."><section className="profile-card"><div className="profile-avatar">{user?.email?.[0]?.toUpperCase()||'U'}</div><div><h2>Customer profile</h2><p>{user?.email}</p><span>Your full Creator profile will be loaded here in the next integration step.</span></div></section></PortalLayout>}
