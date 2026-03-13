'use client'

import { useState } from 'react'
import RoleSelector  from '@/components/auth/RoleSelector'
import RoleChip      from '@/components/auth/RoleChip'
import LoginForm     from '@/components/auth/LoginForm'
import TrustBadges   from '@/components/auth/TrustBadges'

// ─────────────────────────────────────────────
//  RightPanel — login form panel
// ─────────────────────────────────────────────
export default function RightPanel() {
  const [role, setRole] = useState('manager')

  return (
    <div
      className="flex-1 flex items-center justify-center"
      style={{
        background: '#08101e',
        padding:    '40px 24px',
      }}
    >
      {/* Card */}
      <div
        className="hx-fade-up w-full"
        style={{ maxWidth: 460 }}
      >

        {/* ── Header ── */}
        <div className="mb-7">
          <h2
            style={{
              fontSize:      28,
              fontWeight:    800,
              color:         '#e8edf5',
              letterSpacing: '-0.8px',
              marginBottom:  6,
            }}
          >
            Sign in to Helixion
          </h2>
          <p style={{ fontSize: 13.5, color: '#6b7d96', fontWeight: 400 }}>
            Select your role, then sign in with your credentials
          </p>
        </div>

        {/* ── Role Selector ── */}
        <RoleSelector activeRole={role} onRoleChange={setRole} />

        {/* ── Role Chip ── */}
        <div className="mb-5">
          <RoleChip role={role} />
        </div>

        {/* ── Login Form ── */}
        <LoginForm role={role} />

        {/* ── Trust Badges ── */}
        <TrustBadges />

      </div>
    </div>
  )
}
