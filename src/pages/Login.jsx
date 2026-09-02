import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {authApi} from '../services/auth';
import {validateField} from '../utils/validation';
import FormField from '../components/FormField';
import './Login.css';

export default function Login(){
  const[email,setEmail]=useState('');const[password,setPassword]=useState('');const[errors,setErrors]=useState({});const[loading,setLoading]=useState(false);const[message,setMessage]=useState('');
  function validate(){const next={email:validateField('email',email),password:validateField('password',password)};Object.keys(next).forEach(k=>!next[k]&&delete next[k]);setErrors(next);return !Object.keys(next).length;}
  async function submit(e){e.preventDefault();setMessage('');if(!validate())return;setLoading(true);try{await authApi.login({email:email.trim().toLowerCase(),password});window.location.hash='#/dashboard';window.location.reload()}catch(err){setMessage(err.data?.message||'Invalid email or password.')}finally{setLoading(false)}}
  return <div className="login-page"><section className="login-panel"><div className="login-brand"><span>L</span><strong>LMS Customer Portal</strong></div><div className="login-copy"><small>LOAN MANAGEMENT</small><h1>Manage your loan journey with confidence.</h1><p>Apply, track progress and manage repayments in one secure customer portal.</p></div><div className="login-note"><strong>Simple. Secure. Transparent.</strong><span>Everything you need, without unnecessary complexity.</span></div></section><section className="login-content"><div className="login-card"><header><span>WELCOME BACK</span><h2>Sign in</h2><p>Access your applications, documents and payments.</p></header><form onSubmit={submit} noValidate><FormField label="Email" name="email" error={errors.email}><input autoComplete="email" value={email} onChange={e=>{setEmail(e.target.value);setErrors(x=>({...x,email:''}))}} placeholder="name@example.com"/></FormField><FormField label="Password" name="password" error={errors.password}><input type="password" autoComplete="current-password" value={password} onChange={e=>{setPassword(e.target.value);setErrors(x=>({...x,password:''}))}} placeholder="Enter your password"/></FormField>{message&&<div className="login-error">{message}</div>}<button className="login-submit" disabled={loading}>{loading?'Signing in...':'Sign in'}</button><p className="login-switch">New customer? <Link to="/register">Create an account</Link></p></form></div></section></div>;
}
