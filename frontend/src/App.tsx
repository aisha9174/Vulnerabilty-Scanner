import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Activity, 
  Lock, 
  Terminal, 
  Users, 
  Zap, 
  Award, 
  Database, 
  UserPlus, 
  Heart,
  TrendingUp,
  AlertTriangle,
  Layers,
  Settings
} from 'lucide-react';
import { showConnect, authenticate } from '@stacks/connect';

const App = () => {
  const [userData, setUserData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const authOptions: any = {
    appDetails: {
      name: 'Stax Guard',
      icon: window.location.origin + '/logo.png',
    },
    redirectTo: '/',
    onFinish: () => {
      window.location.reload();
    },
    userSession: null,
  };

  useEffect(() => {
    // Basic auth check logic
  }, []);

  const connectWallet = () => {
    authenticate(authOptions);
  };

  const disconnectWallet = () => {
    setUserData(null);
  };

  const FeatureCard = ({ icon: Icon, title, desc, children }: any) => (
    <div className="glass-card p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-cyan-500/10 rounded-xl">
          <Icon className="text-cyan-400" size={24} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      <div className="mt-auto pt-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <nav className="nav glass-card m-4">
        <div className="flex items-center gap-3">
          <Shield className="text-cyan-400 pulse rounded-full" size={32} />
          <h1 className="text-2xl font-bold tracking-tighter uppercase">STAX GUARD</h1>
        </div>
        <div className="flex gap-8 items-center font-semibold">
          <button onClick={() => setActiveTab('overview')} className={`hover:text-cyan-400 ${activeTab === 'overview' ? 'text-cyan-400' : ''}`}>OVERVIEW</button>
          <button onClick={() => setActiveTab('security')} className={`hover:text-cyan-400 ${activeTab === 'security' ? 'text-cyan-400' : ''}`}>SECURITY</button>
          <button onClick={() => setActiveTab('incentives')} className={`hover:text-cyan-400 ${activeTab === 'incentives' ? 'text-cyan-400' : ''}`}>INCENTIVES</button>
          {userData ? (
            <button onClick={disconnectWallet} className="btn-primary">DISCONNECT</button>
          ) : (
            <button onClick={connectWallet} className="btn-primary">CONNECT WALLET</button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8">
        {activeTab === 'overview' && (
          <div className="px-6">
            <header className="mb-12">
              <h2 className="text-5xl font-bold mb-4">Vulnerability Scanner <span className="text-cyan-400">Hub</span></h2>
              <p className="text-slate-400 max-w-2xl text-lg">
                Decentralized security monitoring for the Stacks ecosystem. Real-time alerts, auditor registry, and community-driven security.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-8 flex flex-col">
                <span className="text-slate-400 uppercase tracking-widest text-xs mb-2">Total Monitored</span>
                <span className="stat-value">1,248</span>
                <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                  <TrendingUp size={16} /> +12% this week
                </div>
              </div>
              <div className="glass-card p-8 flex flex-col">
                <span className="text-slate-400 uppercase tracking-widest text-xs mb-2">Critical Alerts</span>
                <span className="stat-value text-red-400">42</span>
                <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm">
                  Last detected 4 blocks ago
                </div>
              </div>
              <div className="glass-card p-8 flex flex-col">
                <span className="text-slate-400 uppercase tracking-widest text-xs mb-2">Active Nodes</span>
                <span className="stat-value text-purple-400">86</span>
                <div className="mt-4 flex items-center gap-2 text-purple-400/60 text-sm">
                  Fully decentralized network
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard 
                icon={Zap} 
                title="Pattern Voting" 
                desc="Community-driven security. Vote on suspicious patterns to adjust their risk scores dynamically."
              >
                <input type="number" placeholder="Pattern ID" />
                <div className="flex gap-2">
                  <button className="btn-primary flex-1">Upvote</button>
                  <button className="btn-primary flex-1 bg-red-500/20 text-red-400 border border-red-500/40">Downvote</button>
                </div>
              </FeatureCard>

              <FeatureCard 
                icon={Activity} 
                title="Contract Heartbeat" 
                desc="Proof of activity for smart contracts. Ping the contract periodically to maintain its 'Active' status."
              >
                <input type="text" placeholder="Contract ID (Principal)" />
                <button className="btn-primary w-full">Ping Heartbeat</button>
              </FeatureCard>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Auditor Staking" icon={Lock} desc="Stake STX to become a verified auditor. Minimum 1,000,000 uSTX required.">
              <input type="number" placeholder="Amount (uSTX)" />
              <button className="btn-primary w-full">Stake as Auditor</button>
            </FeatureCard>

            <FeatureCard title="Dispute Alert" icon={AlertTriangle} desc="Dispute a vulnerability alert found on your contract. Requires evidence.">
              <input type="number" placeholder="Alert ID" />
              <input type="text" placeholder="Dispute Reason" />
              <button className="btn-primary w-full">Dispute Alert</button>
            </FeatureCard>

            <FeatureCard title="Dependency Track" icon={Layers} desc="Link your contract dependencies to track risk contagion across the network.">
              <input type="text" placeholder="Main Contract" />
              <input type="text" placeholder="Dependency Contract" />
              <button className="btn-primary w-full">Add Dependency</button>
            </FeatureCard>

            <FeatureCard title="Scanner Nodes" icon={Terminal} desc="Register authorized scanner nodes to contribute to the decentralized scanning network.">
              <input type="text" placeholder="Node Principal" />
              <button className="btn-primary w-full">Register Node</button>
            </FeatureCard>

            <FeatureCard title="Maintenance" icon={Settings} desc="Set planned maintenance windows for your contract to suppress false alerts.">
              <input type="number" placeholder="Start Block" />
              <input type="number" placeholder="End Block" />
              <button className="btn-primary w-full">Set Window</button>
            </FeatureCard>

            <FeatureCard title="Categorization" icon={Database} desc="Tag your contract with categories like DeFi, NFT, or DAO for better indexing.">
              <input type="text" placeholder="Category Name" />
              <button className="btn-primary w-full">Tag Contract</button>
            </FeatureCard>
          </div>
        )}

        {activeTab === 'incentives' && (
          <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard title="Audit Bounties" icon={Award} desc="Fund an open bounty for a comprehensive security audit of a specific contract.">
              <input type="text" placeholder="Contract ID" />
              <input type="number" placeholder="Amount (uSTX)" />
              <button className="btn-primary w-full">Fund Bounty</button>
            </FeatureCard>

            <FeatureCard title="Vulnerability Reward Pool" icon={Heart} desc="Create a custom reward pool specifically for critical vulnerability findings.">
              <input type="text" placeholder="Contract ID" />
              <input type="number" placeholder="Reward Pool Amount (uSTX)" />
              <button className="btn-primary w-full">Fund Reward Pool</button>
            </FeatureCard>

            <FeatureCard title="Auditor Ratings" icon={UserPlus} desc="Rate the accuracy and helpfulness of auditors. Influence their reputation score.">
              <input type="text" placeholder="Auditor Principal" />
              <input type="number" placeholder="Rating (1-5)" min="1" max="5" />
              <button className="btn-primary w-full">Submit Rating</button>
            </FeatureCard>

            <FeatureCard title="Premium Perks" icon={Zap} desc="Unlock advanced features by purchasing a premium subscription for a specific duration.">
              <input type="number" placeholder="Duration (Blocks)" />
              <button className="btn-primary w-full">Purchase Premium</button>
            </FeatureCard>
          </div>
        )}
      </main>

      <footer className="mt-20 p-12 border-t border-slate-800 text-center text-slate-500">
        <p>© 2026 STAX GUARD - Decentralized Security Infrastructure</p>
      </footer>
    </div>
  );
};

export default App;
