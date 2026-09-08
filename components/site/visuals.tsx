import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Wallet,
  Building2,
  Users,
  Layers3,
  ShieldCheck,
  Code2,
  Bell,
} from 'lucide-react';
export function Dashboard() {
  return (
    <div className="dashboard-scene">
      <div className="dashboard">
        <aside>
          <span className="mini-logo">
            pay<span>mint</span>
          </span>
          <div className="side-active">
            <Layers3 />
            Overview
          </div>
          <div>
            <ArrowUpRight />
            Payouts
          </div>
          <div>
            <Users />
            Beneficiaries
          </div>
          <div>
            <Wallet />
            Reports
          </div>
          <div className="side-bottom">
            <ShieldCheck />
            Business workspace
          </div>
        </aside>
        <div className="dash-main">
          <div className="dash-top">
            <span>Business overview</span>
            <span>
              <Bell size={14} /> <b className="avatar">TM</b>
            </span>
          </div>
          <div className="dash-welcome">
            <div>
              <h3>Let’s get things moving.</h3>
              <span>Your payments, all in one place.</span>
            </div>
            <span className="mock-button">
              New payout <span>+</span>
            </span>
          </div>
          <div className="balance-row">
            <div className="balance">
              <span>
                Available balance <Wallet size={14} />
              </span>
              <strong>
                R 248,500<span>.00</span>
              </strong>
              <small>ZAR · South African rand</small>
            </div>
            <div className="paid">
              <span>Paid this month</span>
              <strong>R 182,400</strong>
              <small>
                <span className="dot" /> Payments in motion
              </small>
            </div>
          </div>
          <div className="dash-activity">
            <h4>
              Recent payouts{' '}
              <span>
                All transactions <ArrowUpRight size={12} />
              </span>
            </h4>
            <div className="mock-table-head">
              <span>Payment</span>
              <span>Amount</span>
              <span>Status</span>
            </div>
            {[
              ['September payroll', 'R 124,500', 'Completed'],
              ['Supplier payment', 'R 18,200', 'Completed'],
              ['Contractor payout', 'R 6,400', 'In review'],
            ].map(([a, b, c], i) => (
              <div className="mock-row" key={a}>
                <span>
                  <i>
                    {i === 0 ? <Users size={16} /> : <Building2 size={16} />}
                  </i>
                  <span>
                    {a}
                    <small>
                      {i === 0 ? 'Monthly salary run' : 'Business payout'}
                    </small>
                  </span>
                </span>
                <b>{b}</b>
                <em className={i === 2 ? 'review' : ''}>{c}</em>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="payment-toast">
        <span className="check-circle">
          <Check size={19} />
        </span>
        <div>
          <strong>Payroll, taken care of.</strong>
          <span>One batch. Every person.</span>
        </div>
        <ArrowUpRight size={16} />
      </div>
      <div className="illustration-label">
        ILLUSTRATIVE PRODUCT VIEW · SAMPLE DATA
      </div>
    </div>
  );
}
export function Phone() {
  return (
    <div className="phone-scene">
      <div className="phone">
        <div className="phone-status">
          9:41 <span>••• ▰</span>
        </div>
        <div className="phone-greeting">
          <span>Hello, Thandi</span>
          <b className="avatar">T</b>
        </div>
        <h3>
          A little more
          <br />
          peace of mind.
        </h3>
        <div className="phone-balance">
          <span>Your earnings overview</span>
          <strong>
            R 12,500<span>.00</span>
          </strong>
          <small>Illustrative monthly earnings</small>
        </div>
        <div className="phone-actions">
          <span>
            <Wallet />
            My money
          </span>
          <span>
            <ArrowUpRight />
            Activity
          </span>
          <span>
            <Layers3 />
            Benefits
          </span>
        </div>
        <div className="wellness-note">
          <span className="eyebrow">YOUR FINANCIAL WELLBEING</span>
          <h4>
            Small steps.
            <br />
            More possibilities.
          </h4>
          <span>
            Understand your money <ArrowRight size={15} />
          </span>
        </div>
        <div className="phone-nav">
          <span>
            ⌂<small>Home</small>
          </span>
          <span>
            ◎<small>Activity</small>
          </span>
          <span>
            ♧<small>Profile</small>
          </span>
        </div>
      </div>
      <div className="phone-badge">
        <ShieldCheck size={24} />
        <span>
          Designed around
          <br />
          <strong>your everyday.</strong>
        </span>
      </div>
      <div className="illustration-label">
        CONCEPT EXPERIENCE · NOT A LIVE SOUTH AFRICAN APP
      </div>
    </div>
  );
}
export function Network() {
  return (
    <div className="network-scene">
      <div className="network-top">
        <div>
          <Building2 />
          <span>Businesses</span>
        </div>
        <div>
          <Code2 />
          <span>Your systems</span>
        </div>
      </div>
      <div className="network-line" />
      <div className="network-hub">
        <span className="mini-logo">paymint</span>
        <span>ONE CONNECTED PLATFORM</span>
      </div>
      <div className="network-line" />
      <div className="network-partner">
        <ShieldCheck size={20} /> Financial partners
      </div>
      <div className="network-line" />
      <div className="network-top">
        <div>
          <Users />
          <span>Employees</span>
        </div>
        <div>
          <Wallet />
          <span>Beneficiaries</span>
        </div>
      </div>
      <div className="illustration-label">
        ILLUSTRATIVE ECOSYSTEM · NO PARTNERS IMPLIED
      </div>
    </div>
  );
}
export function Integration() {
  return (
    <div className="integration-visual">
      <div className="code-heading">
        <Code2 size={20} />
        <span>Integration blueprint</span>
        <span className="dot" />
      </div>
      <div className="code-body">
        <span className="code-comment">
          {'// A conversation, then a connection.'}
        </span>
        <div>
          <em>01</em>
          <span>Your HR, payroll or ERP system</span>
        </div>
        <p>↓ &nbsp; Agreed data & payment instructions</p>
        <div>
          <em>02</em>
          <span>PayMint integration layer</span>
        </div>
        <p>↓ &nbsp; Partner-connected workflows</p>
        <div>
          <em>03</em>
          <span>Financial service delivery</span>
        </div>
        <p>↑ &nbsp; Status & reconciliation</p>
      </div>
      <div className="code-foot">
        <ShieldCheck size={16} /> Scope. Integrate. Validate. Launch.
      </div>
      <small>Conceptual architecture. Not an API specification.</small>
    </div>
  );
}
export function Visual({ type }: { type: string }) {
  return type === 'mobile' ? (
    <Phone />
  ) : type === 'network' ? (
    <Network />
  ) : type === 'flow' ? (
    <Integration />
  ) : (
    <Dashboard />
  );
}
