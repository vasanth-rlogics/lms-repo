import React from 'react';
import PortalLayout from '../components/PortalLayout';
import './Payments.css';
export default function Payments({user}){return <PortalLayout user={user} title="Payments" subtitle="Review repayment information and upcoming EMI details."><section className="payments-card"><h2>Payments</h2><p>No repayment schedule is available yet.</p></section></PortalLayout>}
