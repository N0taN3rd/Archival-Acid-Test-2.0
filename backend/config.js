const path = require('path')
const ONE_DAY = 60 * 60 * 24 * 1000

const NONCE = "'nonce-hahahah1' 'nonce-hahahah2' 'nonce-hahahah3' 'nonce-hahahah4' 'nonce-hahahah5' 'nonce-hahahah6' 'nonce-hahahah7'"
const allowURL = 'https://bandcamp.com/EmbeddedPlayer.html https://getsworse.bandcamp.com https://p4.bcbits.com https://f4.bcbits.com https://bandcamp.com https://www.google.com http://placehold.it https://s4.bcbits.com'
const cspAllow = `${NONCE} ${process.env.FRONT_END_LOC} ${process.env.FRONT_END_LOC}/tests/archivingUnfriendly ${allowURL}`

module.exports = {
  auth: {
    secret: 'ImACopYouIdiot',
    cookie: {
      enabled: true,
      httpOnly: false,
      maxAge: ONE_DAY,
      name: 'feathers-jwt',
      secure: false
    }
  },
  corsAuthCookie: {
    path: '/cors',
    httpOnly: false,
    maxAge: ONE_DAY
  },
  host: process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0',
  port: process.env.LISTENPORT,
  frontEndLoc: process.env.FRONT_END_LOC,
  apiEndPoint: process.env.API_ENDPOINT || '',
  frontEndDomain: process.env.FRONT_END_DOMAIN,
  hehehEncoded: `${process.env.FRONT_END_LOC}/tests/iframeMadness/evalInjectedIframe2.html`,
  metaRefreshP1: `${process.env.FRONT_END_LOC}/redirection/metaRefresh/p1`,
  metaRefreshFin: `${process.env.FRONT_END_LOC}/redirection/metaRefresh/fin`,
  dbPath: path.join(__dirname, '..', 'dbs'),
  staticPath: path.join(__dirname, '..', 'public'),
  viewsPath: path.join(__dirname, '..', 'pug'),
  viewEngine: 'pug',
  getsWorse: {
    csp: `default-src ${cspAllow}; connect-src ${cspAllow}; frame-src ${cspAllow}; img-src ${cspAllow}; manifest-src ${cspAllow}; media-src ${cspAllow}; object-src ${cspAllow}; script-src ${cspAllow}; style-src ${cspAllow}; font-src data: ${cspAllow}; worker-src ${cspAllow};`,
    title: `${process.env.FRONT_END_LOC}/tests/archivingUnfriendly/getsWorse.jpg`,
    incept1: `${process.env.FRONT_END_LOC}/tests/archivingUnfriendly/inception.jpg`,
    incept2: `${process.env.FRONT_END_LOC}/tests/archivingUnfriendly/inception2.jpg`,
    gwbc: `${process.env.FRONT_END_LOC}/tests/archivingUnfriendly/getsworselive.jpg`,
  },
  randomJokes: {
    chuckNorris: {
      cats: ['dev', 'movie', 'food', 'celebrity', 'science', 'political', 'sport', 'religion', 'explicit', 'animal', 'music', 'history', 'travel', 'career', 'money', 'fashion'],
      randy: 'random',
      https: true,
      endpoint: 'api.chucknorris.io'
    },
    dad: {
      accept: 'json',
      endpoint: 'icanhazdadjoke.com',
      image: {
        path: 'j',
        type: '.png'
      },
      https: true
    }
  },
  tvMaze: {
    starTrek: {
      original: 'http://api.tvmaze.com/singlesearch/shows/490',
      tng: 'http://api.tvmaze.com/singlesearch/shows/491'
    },
    xFiles: 'http://api.tvmaze.com/singlesearch/shows/430'
  },
  acidRoutes: require('./routeInfo/acid')
}
