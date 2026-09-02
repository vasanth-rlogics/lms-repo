import React from 'react';
import PortalLayout from '../components/PortalLayout';
import './Applications.css';
export default function Applications({user}){return <PortalLayout user={user} title="Applications" subtitle="View and manage your loan applications."><section className="applications-card"><header><div><h2>Your applications</h2><p>Applications linked to your customer account will appear here.</p></div><button>New application</button></header><div className="applications-empty"><span>+</span><strong>No applications yet</strong><p>Start a loan application when you are ready.</p></div></section></PortalLayout>}
