export interface IAuthentication {
  kind: string
  users: User[]
}

export interface User {
  localId: string
  email: string
  passwordHash: string
  emailVerified: boolean
  passwordUpdatedAt: number
  providerUserInfo: ProviderUserInfo[]
  validSince: string
  disabled: boolean
  lastLoginAt: string
  createdAt: string
  lastRefreshAt: string
}

export interface ProviderUserInfo {
  providerId: string
  federatedId: string
  email: string
  rawId: string
}
