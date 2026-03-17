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
  Settings,
  MessageSquare,
  FileText
} from 'lucide-react';
import { authenticate } from '@stacks/connect';

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
        <div className="flex gap-8 items-center font-semibold text-sm">
          <button onClick={() => setActiveTab('overview')} className={`hover:text-cyan-400 ${activeTab === 'overview' ? 'text-cyan-400' : ''}`}>OVERVIEW</button>
          <button onClick={() => setActiveTab('security')} className={`hover:text-cyan-400 ${activeTab === 'security' ? 'text-cyan-400' : ''}`}>SECURITY</button>
          <button onClick={() => setActiveTab('incentives')} className={`hover:text-cyan-400 ${activeTab === 'incentives' ? 'text-cyan-400' : ''}`}>INCENTIVES</button>
          <button onClick={() => setActiveTab('consensus')} className={`hover:text-cyan-400 ${activeTab === 'consensus' ? 'text-cyan-400' : ''}`}>GOVERNANCE</button>
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
              <h2 className="text-5xl font-bold mb-4">Security <span className="text-cyan-400">Consensus</span></h2>
              <p className="text-slate-400 max-w-2xl text-lg">
                The first decentralized vulnerability scanner with multi-signature validation, insurance funds, and reputation slashing.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-8 flex flex-col">
                <span className="text-slate-400 uppercase tracking-widest text-xs mb-2">Network Status</span>
                <span className="stat-value">ACTIVE</span>
                <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm">
                  <Activity size={16} /> 20 Active Protocols
                </div>
              </div>
              <div className="glass-card p-8 flex flex-col">
                <span className="text-slate-400 uppercase tracking-widest text-xs mb-2">Insurance Pool</span>
                <span className="stat-value text-green-400">850k</span>
                <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm">
                  uSTX Locked in Safety Fund
                </div>
              </div>
              <div className="glass-card p-8 flex flex-col">
                <span className="text-slate-400 uppercase tracking-widest text-xs mb-2">Consensus Rate</span>
                <span className="stat-value text-purple-400">99.8%</span>
                <div className="mt-4 flex items-center gap-2 text-purple-400/60 text-sm">
                  Multi-Sig Accuracy
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard 
                icon={Zap} 
                title="Consensus Voting" 
                desc="Participate in network consensus. Confirm or reject reported vulnerabilities through decentralized voting."
              >
                <input type="number" placeholder="Alert ID" />
                <button className="btn-primary w-full">Confirm Alert</button>
              </FeatureCard>

              <FeatureCard 
                icon={Shield} 
                title="Insurance Deposit" 
                desc="Protect your protocol. Contribute to the STX insurance fund to hedge against potential security failures."
              >
                <input type="number" placeholder="Amount (uSTX)" />
                <button className="btn-primary w-full">Deposit to Fund</button>
              </FeatureCard>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Auditor Staking" icon={Lock} desc="Auditors must stake STX. Inaccurate reports lead to permanent reputation slashing.">
              <input type="number" placeholder="Stake Amount" />
              <button className="btn-primary w-full">Stake STX</button>
            </FeatureCard>

            <FeatureCard title="Risk Tiering" icon={Layers} desc="Subscribe to enterprise-grade monitoring with dedicated scan cycles and priority alerts.">
              <div className="flex gap-2">
                <button className="btn-primary flex-1 text-xs">Tier 1</button>
                <button className="btn-primary flex-1 text-xs opacity-50">Tier 2</button>
                <button className="btn-primary flex-1 text-xs opacity-50">Tier 3</button>
              </div>
            </FeatureCard>

            <FeatureCard title="Verified Docs" icon={FileText} desc="Link on-chain documentation hashes to ensure contract transparency.">
              <input type="text" placeholder="Doc Hash" />
              <button className="btn-primary w-full">Verify Docs</button>
            </FeatureCard>

            <FeatureCard title="Scanner Nodes" icon={Terminal} desc="Register authorized hardware nodes to contribute to the global scan network.">
              <input type="text" placeholder="Node ID" />
              <button className="btn-primary w-full">Join Network</button>
            </FeatureCard>

            <FeatureCard title="Dispute System" icon={AlertTriangle} desc="Challenge invalid alerts. Requires staking and evidence submission.">
              <input type="number" placeholder="Alert ID" />
              <button className="btn-primary w-full">Open Dispute</button>
            </FeatureCard>

            <FeatureCard title="Maintenance" icon={Settings} desc="Schedule contract upgrades to avoid triggering false positive alerts.">
              <input type="number" placeholder="Duration (Blocks)" />
              <button className="btn-primary w-full">Set Window</button>
            </FeatureCard>
          </div>
        )}

        {activeTab === 'incentives' && (
          <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard title="Vulnerability Reward Pool" icon={Award} desc="Set aside STX rewards for developers who find critical bugs in your code.">
              <input type="number" placeholder="Pool Amount" />
              <button className="btn-primary w-full">Fund Pool</button>
            </FeatureCard>

            <FeatureCard title="Audit Bounties" icon={Heart} desc="Open public bounties for third-party audits. First come, first serve.">
              <input type="number" placeholder="Bounty Amount" />
              <button className="btn-primary w-full">Sponsor Audit</button>
            </FeatureCard>

            <FeatureCard title="Reputation Slashing" icon={TrendingUp} desc="Accountability mechanism. Slash auditor stakes for verified incompetence.">
              <input type="text" placeholder="Auditor ID" />
              <button className="btn-primary w-full bg-red-500/20 text-red-500 border border-red-500/50">Slash Stake</button>
            </FeatureCard>

            <FeatureCard title="Auditor Ratings" icon={UserPlus} desc="Rate security professionals based on their historical detection accuracy.">
              <input type="text" placeholder="Auditor" />
              <button className="btn-primary w-full">Rate User</button>
            </FeatureCard>
          </div>
        )}

        {activeTab === 'consensus' && (
          <div className="px-6">
            <header className="mb-8">
              <h2 className="text-3xl font-bold">Protocol <span className="text-cyan-400">Discussion</span></h2>
              <p className="text-slate-400">Join the discussion on specific contract vulnerabilities and security patterns.</p>
            </header>
            <div className="glass-card p-6 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">SP3...X6Y</span>
                    <span className="text-slate-500 text-xs">2 hours ago</span>
                  </div>
                  <p className="text-slate-300">The severity on Alert #42 seems overestimated. Re-evaluation needed.</p>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-4 mt-4">
                <input type="text" placeholder="Type your comment..." />
                <button className="btn-primary flex items-center gap-2">
                  <MessageSquare size={16} /> Post Comment
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-20 p-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 STAX GUARD - Decentralized Security Nexus</p>
      </footer>
    </div>
  );
};

export default App;
