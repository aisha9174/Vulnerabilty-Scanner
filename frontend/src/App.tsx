import React, { useState, useEffect } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { 
  ShieldCheck, AlertTriangle, UserCheck, 
  Award, Vote, Link, Star, Tag, Database, Activity, Wallet
} from 'lucide-react';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

function App() {
  const [userData, setUserData] = useState<unknown>(null);
  
  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  const authenticate = () => {
    showConnect({
      appDetails: {
        name: 'STX Vulnerability Scanner',
        icon: window.location.origin + '/vite.svg',
      },
      redirectTo: '/',
      onFinish: () => {
        setUserData(userSession.loadUserData());
      },
      userSession,
    });
  };

  const disconnect = () => {
    userSession.signUserOut('/');
    setUserData(null);
  };

  // State for forms
  const [bountyAmount, setBountyAmount] = useState('');
  const [bountyContract, setBountyContract] = useState('');
  const [stakeAmount, setStakeAmount] = useState('');

  const executeContractCall = (functionName: string, functionArgs: unknown[]) => {
    if (!userData) {
      alert("Please connect your wallet first.");
      return;
    }
    // We mock the actual interaction here for the UI demonstration
    console.log(`Executing ${functionName} with args:`, functionArgs);
    alert(`Mock transaction sent for ${functionName}! Approve in Stacks Wallet (Devnet).`);
  };

  return (
    <div className="app-container">
      <header>
        <div className="logo-section">
          <ShieldCheck size={36} className="logo-icon" />
          <h1>Vulnerability Scanner Web3</h1>
        </div>
        <div>
          {userData ? (
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <span className="status-badge">
                <Wallet size={14} style={{marginRight: '4px'}} />
                Connected
              </span>
              <button onClick={disconnect}>Disconnect</button>
            </div>
          ) : (
            <button className="primary" onClick={authenticate}>Connect Wallet</button>
          )}
        </div>
      </header>

      <main>
        <div className="dashboard-grid">
          
          {/* 1. Audit Bounty */}
          <div className="feature-card">
            <div className="feature-header">
              <Award className="feature-icon" />
              <h3>Audit Bounty</h3>
            </div>
            <p style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '1rem'}}>
              Fund a bounty for a smart contract audit.
            </p>
            <div className="input-group">
              <label>Contract ID</label>
              <input type="text" placeholder="ST123...contract" value={bountyContract} onChange={e => setBountyContract(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Amount (uSTX)</label>
              <input type="number" placeholder="1000000" value={bountyAmount} onChange={e => setBountyAmount(e.target.value)} />
            </div>
            <div className="action-row">
              <button className="primary" onClick={() => executeContractCall('fund-bounty', [bountyContract, bountyAmount])}>Fund Bounty</button>
            </div>
          </div>

          {/* 2. Auditor Staking */}
          <div className="feature-card">
            <div className="feature-header">
              <UserCheck className="feature-icon" />
              <h3>Auditor Staking</h3>
            </div>
            <p style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '1rem'}}>
              Stake STX to signal your trust as an auditor.
            </p>
            <div className="input-group">
              <label>Amount (uSTX)</label>
              <input type="number" placeholder="5000000" value={stakeAmount} onChange={e => setStakeAmount(e.target.value)} />
            </div>
            <div className="action-row">
              <button className="primary" onClick={() => executeContractCall('stake-as-auditor', [stakeAmount])}>Stake STX</button>
            </div>
          </div>

          {/* 3. Alert Dispute */}
          <div className="feature-card">
            <div className="feature-header">
              <AlertTriangle className="feature-icon" />
              <h3>Alert Dispute</h3>
            </div>
            <p style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '1rem'}}>
              File a dispute for an active vulnerability alert.
            </p>
            <div className="input-group">
              <label>Alert ID</label>
              <input type="number" placeholder="1" />
            </div>
            <div className="input-group">
              <label>Reason</label>
              <input type="text" placeholder="False positive because..." />
            </div>
            <div className="action-row">
              <button onClick={() => executeContractCall('dispute-alert', [])}>Submit Dispute</button>
            </div>
          </div>

          {/* 4. Pattern Voting */}
          <div className="feature-card">
            <div className="feature-header">
              <Vote className="feature-icon" />
              <h3>Pattern Voting</h3>
            </div>
            <p style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '1rem'}}>
              Vote on suspicious pattern risk scores.
            </p>
            <div className="input-group">
              <label>Pattern ID</label>
              <input type="number" placeholder="1" />
            </div>
            <div className="action-row" style={{display: 'flex', gap: '0.5rem'}}>
              <button className="primary" style={{background: 'var(--success)'}} onClick={() => executeContractCall('vote-pattern', [true])}>Upvote</button>
              <button className="primary" style={{background: 'var(--danger)'}} onClick={() => executeContractCall('vote-pattern', [false])}>Downvote</button>
            </div>
          </div>

          {/* 5. Auditor Rating */}
          <div className="feature-card">
            <div className="feature-header">
              <Star className="feature-icon" />
              <h3>Rate Auditor</h3>
            </div>
            <p style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '1rem'}}>
              Rate a verified auditor horizontally (1-5).
            </p>
            <div className="input-group">
              <label>Auditor Principal</label>
              <input type="text" placeholder="ST...auditor" />
            </div>
            <div className="input-group">
              <label>Score (1-5)</label>
              <select>
                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                <option value="4">⭐⭐⭐⭐ (4)</option>
                <option value="3">⭐⭐⭐ (3)</option>
                <option value="2">⭐⭐ (2)</option>
                <option value="1">⭐ (1)</option>
              </select>
            </div>
            <div className="action-row">
              <button onClick={() => executeContractCall('rate-auditor', [])}>Submit Rating</button>
            </div>
          </div>

          {/* 6. Contract Categorization */}
          <div className="feature-card">
            <div className="feature-header">
              <Tag className="feature-icon" />
              <h3>Categorization</h3>
            </div>
            <p style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '1rem'}}>
              Tag your contract with a type/category label.
            </p>
            <div className="input-group">
              <label>Contract ID</label>
              <input type="text" placeholder="ST123...contract" />
            </div>
            <div className="input-group">
              <label>Category</label>
              <select>
                <option value="DeFi">DeFi</option>
                <option value="NFT">NFT</option>
                <option value="DAO">DAO</option>
                <option value="Utility">Utility</option>
              </select>
            </div>
            <div className="action-row">
              <button onClick={() => executeContractCall('tag-contract-category', [])}>Tag Contract</button>
            </div>
          </div>

          {/* 7. Maintenance Windows */}
          <div className="feature-card">
            <div className="feature-header">
              <Activity className="feature-icon" />
              <h3>Maintenance Window</h3>
            </div>
            <p style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '1rem'}}>
              Declare a block range for expected contract changes.
            </p>
            <div className="input-group" style={{flexDirection: 'row', gap: '0.5rem'}}>
              <div style={{flex: 1}}>
                <label>Start Block</label>
                <input type="number" placeholder="1000" style={{width: '100%'}}/>
              </div>
              <div style={{flex: 1}}>
                <label>End Block</label>
                 <input type="number" placeholder="1500" style={{width: '100%'}}/>
              </div>
            </div>
            <div className="action-row">
              <button onClick={() => executeContractCall('set-maintenance-window', [])}>Schedule</button>
            </div>
          </div>

          {/* 8. Contract Dependencies */}
          <div className="feature-card">
            <div className="feature-header">
              <Link className="feature-icon" />
              <h3>Link Dependency</h3>
            </div>
            <p style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '1rem'}}>
              Map dependencies for graph-based risk tracking.
            </p>
            <div className="input-group">
              <label>Contract ID</label>
              <input type="text" placeholder="ST...contract1" />
            </div>
            <div className="input-group">
              <label>Dependency ID</label>
              <input type="text" placeholder="ST...contract2" />
            </div>
            <div className="action-row">
              <button onClick={() => executeContractCall('add-dependency', [])}>Link Contracts</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
