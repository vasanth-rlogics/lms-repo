import React from 'react';
import PortalLayout from '../components/PortalLayout';
import './Documents.css';
export default function Documents({user}){return <PortalLayout user={user} title="Documents" subtitle="Upload and review documents linked to your applications."><section className="documents-card"><h2>Documents</h2><p>No documents have been requested yet.</p></section></PortalLayout>}
