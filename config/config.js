exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', 

    clientID: '919aa188-fb0e-4a49-8d97-454739eef3bf',
  
    clientSecret: 'e46bf011-08f8-448f-84e0-8c19c29b1815', 
  
    responseType: 'code id_token', 
  
    responseMode: 'form_post', 
  
    redirectUrl: 'https://localhost:2121/auth/openid/return', 
  
    allowHttpForRedirectUrl: true,
  
    validateIssuer: false,

    issuer: null,
  
    passReqToCallback: false,
  
    useCookieInsteadOfSession: false,
  
    cookieEncryptionKeys: [ 
      { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
      { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
    ],
  
    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],
  
    loggingLevel: false,
  
    nonceLifetime: null,
  
    nonceMaxAmount: 5,
  
    clockSkew: null,
  };
  
  exports.destroySessionUrl = 'http://localhost:2121';
  
  exports.useMongoDBSessionStore = false;
  
  exports.databaseUri = 'mongodb://localhost/OIDCStrategy';
  
  exports.mongoDBSessionMaxAge = 24 * 60 * 60;  
  