import Twit from 'twit';
 
const Twitter = new Twit({
  consumer_key:         'OwOFwyNozANa1D6FbmWJXkihl',
  consumer_secret:      'pj39UzrrVSFZ7eRde34QrQGwJy4dwuENC8q1pgQ1ND4hzMSB59',
  access_token:         '382896909-DqFM5yZkI8L2Hy81sDB2IEQtO4ryx6KuqHVakfZr',
  access_token_secret:  '	m54hBsESq88uETxzA709jadXN9o0Yi4XsYVkZzunIbXe4',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

export default Twitter;