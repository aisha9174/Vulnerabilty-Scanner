# 🛡️ Smart Contract Vulnerability Scanner

## Overview

The **Smart Contract Vulnerability Scanner** is a Clarity-based alert system designed to monitor deployed smart contracts for suspicious patterns and unexpected state changes. This MVP enables security automation, contract analysis, and proactive anomaly detection for blockchain applications.

## ✨ Key Features

- 🔍 **Contract Monitoring**: Register contracts for continuous vulnerability scanning
- 📊 **State Snapshots**: Track contract state changes across blocks
- ⚠️ **Alert System**: Create and manage security alerts with severity levels
- 🎯 **Pattern Detection**: Define and monitor suspicious behavior patterns
- 📝 **Alert History**: Comprehensive alert tracking and resolution workflow
- ⭐ **Whitelisting**: Mark trusted contracts to reduce false positives
- 🔔 **User Subscriptions**: Subscribe to alerts with custom severity preferences
- 🚨 **Emergency Pause**: Admin-level circuit breaker for critical situations

## 📋 Core Concepts

### Contract Monitoring
Track deployed contracts by registering them with an initial risk level (`critical`, `high`, `medium`, `low`).

### Suspicious Patterns
Define vulnerability patterns with risk scores (1-100) that scanners can check against during monitoring.

### Alert Management
Generate, track, and resolve alerts when suspicious activity is detected. Each alert includes type, severity, and detailed information.

### State Snapshots
Record periodic snapshots of contract state (state hash, locked funds, transaction count) for anomaly detection.

## 🚀 Usage Instructions

### 1. **Register a Contract for Monitoring**

```clarity
(contract-call? scanner register-contract 0x1234567890abcdef... "high")
```

- `contract-id`: 32-byte buffer identifying the contract
- `risk-level`: `"critical"`, `"high"`, `"medium"`, or `"low"`

### 2. **Create a Suspicious Pattern**

```clarity
(contract-call? scanner add-suspicious-pattern u1 "Reentrancy" "Detects recursive call patterns" u85)
```

- `pattern-id`: Unique identifier
- `pattern-name`: Name of the vulnerability
- `description`: Pattern description
- `risk-score`: Numeric score 1-100

### 3. **Record a State Snapshot**

```clarity
(contract-call? scanner record-state-snapshot 0x1234567890abcdef... 0xhash123... u50000 u1200)
```

- Captures state hash, locked funds, and transaction count at current block

### 4. **Create an Alert**

```clarity
(contract-call? scanner create-alert 0x1234567890abcdef... "Unusual Fund Transfer" "critical" "Detected 500% fund movement")
```

- Returns the alert ID for tracking and resolution

### 5. **Subscribe to Alerts**

```clarity
(contract-call? scanner subscribe-to-alerts "high")
```

- Subscribe to receive alerts based on severity preference

### 6. **Resolve an Alert**

```clarity
(contract-call? scanner resolve-alert u0)
```

- Mark alert as resolved after investigation

### 7. **Query Contract Information**

```clarity
(contract-call? scanner get-contract-info 0x1234567890abcdef...)
(contract-call? scanner get-alert-info u0)
(contract-call? scanner get-total-alerts)
(contract-call? scanner get-total-monitored)
```

### 8. **Whitelist Trusted Contracts**

```clarity
(contract-call? scanner whitelist-contract 0x1234567890abcdef...)
```

### 9. **Emergency Pause**

```clarity
(contract-call? scanner toggle-emergency-pause true)
```

- Owner only. Pauses all contract operations.

## 🔧 Technical Details

### State Maps

- **contract-monitoring**: Tracks active contracts and their metrics
- **alert-history**: Complete alert log with resolution status
- **suspicious-patterns**: Registered vulnerability patterns
- **contract-state-snapshots**: Historical state records
- **whitelist**: Trusted contract list
- **user-subscriptions**: User alert preferences

### Error Codes

| Code | Error |
|------|-------|
| 100 | Not contract owner |
| 101 | Not authorized |
| 102 | Contract already monitored |
| 103 | Contract not found |
| 104 | Invalid risk level |
| 105 | System paused |
| 106 | Pattern not found |
| 107 | Alert not found |
| 108 | Invalid severity |

## 📊 Contract Metrics

Track in real-time:
- Total monitored contracts
- Total alerts generated
- Alert count per contract
- State change history
- Risk level distribution

## 🔐 Security Considerations

- Only the scanner owner can create alerts and manage patterns
- Contract owners can remove their contracts from monitoring
- Whitelisting prevents unnecessary alert fatigue
- Emergency pause provides circuit breaker functionality
- All state changes are immutable and traceable

## 🎓 Learning Outcomes

This MVP teaches:
- ✅ Smart contract design patterns in Clarity
- ✅ State management and data structures
- ✅ Authorization and access control
- ✅ Error handling and validation
- ✅ Monitoring system architecture
- ✅ Security automation principles

## 📝 Deployment

1. Clone this project into your Clarinet workspace
2. Run `clarinet test` to validate the contract
3. Deploy with `clarinet deploy` to your Stacks testnet/mainnet
4. Interact with the contract using the STX CLI or a dApp interface

## 🤝 Contributing

Future enhancements could include:
- On-chain pattern matching logic
- Integration with Oracle services
- Multi-signature alert resolution
- Advanced risk scoring algorithms
- External monitoring feeds
