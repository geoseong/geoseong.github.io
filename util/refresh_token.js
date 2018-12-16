const axios = require('axios');
const querystring = require('querystring');
const fs = require('fs');
const tokenInfo = require(process.env.ONENOTE);

((tokenInfo) => {
  return axios.post('https://login.live.com/oauth20_token.srf', 
    querystring.stringify({
      'grant_type': 'refresh_token',
      'client_id': tokenInfo.client_id,
      'client_secret': tokenInfo.password,
      'redirect_uri': tokenInfo.redirect_url,
      'refresh_token': tokenInfo.tokens.refresh_token
    })
  ).then(result => {
    // console.log('[refreshToken] result\n', result.data);
    const newTokenInfo = {
      ...tokenInfo,
      tokens: result.data
    };
    fs.writeFileSync(process.env.ONENOTE, JSON.stringify(newTokenInfo, null, 2));
    console.log('[refresh token] refresh done!!!')
  }).catch(e => {
    console.log('[refreshToken] error\n', e);
    return;
  })
})(tokenInfo);
