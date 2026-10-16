import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { DIAGNOSTIC_AUDITS, SERVICES_CATALOG } from '../data/agencyData';

export function ServiceDetailModal({ serviceSlug, onClose, onOpenAudit }) {
  if (!serviceSlug) return null;
  const service =
    SERVICES_CATALOG.find((s) => s.slug === serviceSlug) || SERVICES_CATALOG[0];

  return (
    <div className="hp-modal-backdrop" onClick={onClose}>
      <div
        className="hp-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{ borderTopColor: service.color }}
      >
        <div
          className="hp-modal-header"
          style={{ backgroundColor: service.color }}
        >
          <div className="hp-modal-badge-row">
            <span className="hp-mono-pill">
              SERVICE {service.number} · {service.category.toUpperCase()}
            </span>
            <button
              type="button"
              className="hp-modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
          <h3 className="hp-modal-title">{service.title}</h3>
          <p className="hp-modal-subtitle">{service.headline}</p>
        </div>

        <div className="hp-modal-body">
          <div className="hp-modal-problem-box">
            <span className="hp-box-label">THE BUSINESS BOTTLENECK</span>
            <p>{service.problem}</p>
          </div>

          <div className="hp-modal-section">
            <span className="hp-box-label">CONNECTED EXECUTION FLOW</span>
            <div className="hp-flow-chain">
              {service.flow.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="hp-flow-node">
                    <strong>0{i + 1}</strong> {step}
                  </span>
                  {i < service.flow.length - 1 && (
                    <ArrowRight size={15} className="hp-flow-arrow" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="hp-modal-section">
            <span className="hp-box-label">WHAT AXONVORTEX DELIVERS</span>
            <div className="hp-deliverables-grid">
              {service.deliverables.map((item) => (
                <div key={item} className="hp-deliverable-item">
                  <CheckCircle2 size={18} className="hp-check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hp-modal-footer-bar">
            <div>
              <strong>Want this connected into your growth system?</strong>
              <p>Start with a free diagnostic or book a discovery call.</p>
            </div>
            <button
              type="button"
              className="hp-btn-3d hp-btn-3d--red"
              onClick={() => {
                onClose();
                onOpenAudit(service.title);
              }}
            >
              <span className="hp-btn-3d-inner">
                Plan My {service.title} <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrowthAuditModal({ isOpen, initialTopic = '', onClose }) {
  const [selectedAuditId, setSelectedAuditId] = useState(
    DIAGNOSTIC_AUDITS[0].id
  );
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goal: initialTopic || 'Full Connected Growth System'
  });

  if (!isOpen) return null;

  const activeAudit =
    DIAGNOSTIC_AUDITS.find((a) => a.id === selectedAuditId) ||
    DIAGNOSTIC_AUDITS[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="hp-modal-backdrop" onClick={onClose}>
      <div
        className="hp-modal-card hp-modal-card--wide"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="hp-modal-header"
          style={{ backgroundColor: '#194d15', color: '#ffffff' }}
        >
          <div className="hp-modal-badge-row">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              <Sparkles size={14} /> AXONVORTEX GROWTH DIAGNOSTIC
            </span>
            <button
              type="button"
              className="hp-modal-close hp-modal-close--light"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
          <h3 className="hp-modal-title" style={{ color: '#ffffff' }}>
            Hire AxonVortex / Request Your Growth Audit
          </h3>
          <p className="hp-modal-subtitle" style={{ color: '#fcf5e2' }}>
            Tell us where your growth is stalling. We’ll audit your current
            presence, ads, funnel, and AI opportunities before recommending a
            single tool.
          </p>
        </div>

        <div className="hp-modal-body">
          {submitted ? (
            <div className="hp-audit-success">
              <div className="hp-success-badge">AUDIT REQUEST LOCKED IN</div>
              <h4>We’re Reviewing Your Growth Architecture, {formData.name || 'Partner'}!</h4>
              <p>
                Our strategy & AI engineering team will inspect{' '}
                <strong>{formData.website || 'your digital presence'}</strong>{' '}
                across all 5 checkpoints of the{' '}
                <strong>{activeAudit.title}</strong> and send your custom
                roadmap to <strong>{formData.email}</strong>.
              </p>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--yellow"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
              >
                <span className="hp-btn-3d-inner">Back to AxonVortex</span>
              </button>
            </div>
          ) : (
            <div className="hp-audit-split">
              <div className="hp-audit-selector-col">
                <span className="hp-box-label">
                  1. PICK YOUR DIAGNOSTIC FOCUS
                </span>
                <div className="hp-audit-tabs">
                  {DIAGNOSTIC_AUDITS.map((audit) => (
                    <button
                      key={audit.id}
                      type="button"
                      className={`hp-audit-tab ${
                        selectedAuditId === audit.id ? 'is-active' : ''
                      }`}
                      style={
                        selectedAuditId === audit.id
                          ? { backgroundColor: audit.color }
                          : {}
                      }
                      onClick={() => setSelectedAuditId(audit.id)}
                    >
                      <span className="hp-audit-tab-badge">{audit.badge}</span>
                      <strong>{audit.title}</strong>
                      <small>{audit.question}</small>
                    </button>
                  ))}
                </div>

                <div className="hp-audit-checkpoints">
                  <span className="hp-box-label">
                    WHAT WE INSPECT IN THIS AUDIT:
                  </span>
                  <ul>
                    {activeAudit.checkpoints.map((cp) => (
                      <li key={cp}>
                        <Layers size={15} /> {cp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <form className="hp-audit-form-col" onSubmit={handleSubmit}>
                <span className="hp-box-label">2. YOUR BUSINESS DETAILS</span>
                {initialTopic && (
                  <div className="hp-selected-topic-pill">
                    Selected Focus: <strong>{initialTopic}</strong>
                  </div>
                )}
                <label className="hp-field">
                  <span>Your Name *</span>
                  <input
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </label>
                <label className="hp-field">
                  <span>Work Email *</span>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </label>
                <label className="hp-field">
                  <span>Website or Store URL</span>
                  <input
                    type="text"
                    placeholder="https://yourbusiness.com"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                  />
                </label>
                <label className="hp-field">
                  <span>Primary Growth Bottleneck</span>
                  <select
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                  >
                    <option value="Full Connected Growth System">
                      Full Connected Growth System (Web + Ads + AI)
                    </option>
                    <option value="Meta & Google Ads ROAS">
                      Wasted Ad Spend / Need Better Meta & Google Ads
                    </option>
                    <option value="AI Chatbots, Voice AI & Automation">
                      Too Much Manual Work / Need AI Agents & Automation
                    </option>
                    <option value="Website, Shopify & Conversion Rate">
                      Weak Website / Shopify Conversion Rate
                    </option>
                    <option value="Lead Generation & CRM Follow-up">
                      Traffic Without Qualified Leads / Slow Follow-Up
                    </option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="hp-btn-3d hp-btn-3d--red hp-btn-3d--full"
                >
                  <span className="hp-btn-3d-inner">
                    Send My Free Growth Roadmap <ArrowRight size={18} />
                  </span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
