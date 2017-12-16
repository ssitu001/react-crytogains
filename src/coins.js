export const coins = [
  'bitcoin',
  'ethereum',
  'bitcoin-cash',
  'ripple',
  'litecoin',
  'iota',
  'dash',
  'monero',
  'nem',
  'bitcoin-gold',
  'eos',
  'cardano',
  'neo',
  'ethereum-classic',
  'stellar',
  'bitconnect',
  'populous',
  'waves',
  'qtum',
  'zcash',
  'lisk',
  'omisego',
  'tron',
  'ardor',
  'stratis',
  'tether',
  'monacoin',
  'hshare',
  'nxt',
  'bitshares',
  'bytecoin-bcn',
  'decred',
  'veritaseum',
  'ark',
  'steem',
  'augur',
  'salt',
  'dogecoin',
  'komodo',
  'einsteinium',
  'vertcoin',
  'siacoin',
  'golem-network-tokens',
  'digixdao',
  'decentraland',
  'raiblocks',
  'pivx',
  'binance-coin',
  'maidsafecoin',
  'tenx',
  'santiment',
  'qash',
  'basic-attention-token',
  'factom',
  'syscoin',
  'power-ledger',
  'status',
  'monaco',
  'aion',
  'verge',
  'bitcoindark',
  'cryptonex',
  'zcoin',
  'gas',
  'byteball',
  'walton',
  'funfair',
  'kyber-network',
  'bytom',
  'raiden-network-token',
  '0x',
  'request-network',
  'gnosis-gno',
  'bancor',
  'gamecredits',
  'iconomi',
  'vechain',
  'nexus',
  'aeternity',
  'digibyte',
  'nav-coin',
  'pura',
  'metal',
  'civic',
  'edgeless',
  'rchain',
  'metaverse',
  'blocknet',
  'gxshares',
  'potcoin',
  'storj',
  'peercoin',
  'dragonchain',
  'paypie',
  'streamr-datacoin',
  'revain',
  'ethos',
  'chainlink',
  'firstblood',
  'singulardtv',
];

export const coinOpts = coins.reduce((opts, coin, i) => {
  const upperCasePrefix = coin.slice(0, 1).toUpperCase() + coin.slice(1); 
  const opt = {key: i+coin.slice(0,1), text: upperCasePrefix, value: coin};
  opts.push(opt);
  return opts;
}, []);

