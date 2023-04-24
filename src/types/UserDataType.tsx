export interface UserDataType {
	accessToken?: string;
	auth?: any;
	displayName?: string | null;
	email?: string;
	emailVerified?: boolean;
	isAnonymous?: boolean;
	metadata?: any;
	phoneNumber?: string | null;
	photoURL?: string | null;
	proactiveRefresh?: any;
	providerData: any[];
	providerId: string;
	reloadListener?: any | null;
	reloadUserInfo?: any;
	stsTokenManager?: any;
	tenantId: string | null;
	uid: string;
}
