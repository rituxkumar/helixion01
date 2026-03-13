import RegisterForm  from '@/components/auth/RegisterForm'
import TrustBadges   from '@/components/auth/TrustBadges'

// ─────────────────────────────────────────────
//  RegisterRightPanel — right side of register page
// ─────────────────────────────────────────────
export default function RegisterRightPanel() {
  return (
    <div
      className="flex-1 flex items-center justify-center"
      style={{
        background: '#08101e',
        padding:    '40px 24px',
        overflowY:  'auto',
      }}
    >
      {/* Card */}
      <div
        className="hx-fade-up w-full"
        style={{ maxWidth: 460 }}
      >

        {/* ── Header ── */}
        <div className="mb-7">

          {/* Step pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4"
            style={{
              background: 'rgba(59,111,224,0.1)',
              border:     '1px solid rgba(59,111,224,0.25)',
            }}
          >
            <div
              className="rounded-full"
              style={{ width: 6, height: 6, background: '#3b6fe0' }}
            />
            <span style={{ fontSize: 11.5, color: '#7aabff', fontWeight: 600, letterSpacing: '0.05em' }}>
              NEW ACCOUNT
            </span>
          </div>

          <h2
            style={{
              fontSize:      28,
              fontWeight:    800,
              color:         '#e8edf5',
              letterSpacing: '-0.8px',
              marginBottom:  6,
            }}
          >
            Create your account
          </h2>
          <p style={{ fontSize: 13.5, color: '#6b7d96', fontWeight: 400 }}>
            Join Helixion and access your purpose-built workspace
          </p>
        </div>

        {/* ── Register Form ── */}
        <RegisterForm />

        {/* ── Trust Badges ── */}
        <TrustBadges />

      </div>
    </div>
  )
}
