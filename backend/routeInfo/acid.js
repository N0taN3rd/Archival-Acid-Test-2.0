module.exports = {
  navInfo: {
    '/': 'Home',
    '/acidv1': 'Acid Test v1',
    '/redirection': 'Redirection',
    '/dynamic': 'Dynamic'
  },
  sections: {
    '/': [
      {
        title: 'Original',
        desc: 'The Original Test Created By Mat Kelly',
        href: '/acidv1'
      },
      {
        title: 'Redirection',
        desc: 'How Well Can You Handle Bouncing Around Our Server',
        href: '/redirection'
      },
      {
        title: 'CORS',
        desc: 'Request To Another Domain',
        href: 'cors',
        actTest: true
      },
      {
        title: 'Dynamic Content',
        desc: 'How Well Can You Handle The Dynamic Web',
        href: '/dynamic'
      }
    ],
    '/acidv1': [
      {
        title: 'Original On This Domain',
        desc: 'The Original Test Created By Mat Kelly',
        href: '/tests/acidv1Mats',
        actTest: true
      },
      {
        title: 'Original Iframe',
        desc: "Mat Kelly's Original Test But Loaded Via An Iframe From The Original Domain",
        href: '/tests/acidv1Iframe',
        actTest: true
      },
      {
        title: 'Original Custom Element',
        desc: 'Can You Handle Custom Elements?',
        href: '/tests/acidv1CustomElements',
        actTest: true
      }
    ],
    '/redirection': [
      {
        title: 'Random Chain',
        desc: 'The Server Will Randomly Choose How Many Times To Bounce You Around',
        href: '/redirection/chain',
        actTest: true
      },
      {
        title: 'Cookies And Redirection',
        desc: 'Does A Cookie Make It After Bouncing Around',
        href: '/redirection/cookie',
        actTest: true
      }
    ],
    '/dynamic': [
      {
        title: 'Iframe Madness',
        desc: 'Dynamic Content And Ads Come From Everywhere including Iframes',
        href: '/tests/iframeMadness',
        actTest: true
      },
      {
        title: 'React',
        desc: 'JavaScript UX Please!',
        href: '/tests/simpleReact',
        actTest: true
      },
      {
        title: 'Polymer',
        desc: 'A Progressive Web App',
        href: '/tests/polymer',
        actTest: true
      },
      {
        title: 'SPA',
        desc: 'A Single Page Application',
        href: '/tests/reactSPA',
        actTest: true
      }
    ]
  },
  routeConf: [
    { path: '/', exact: true },
    { path: '/acidv1', exact: false },
    { path: '/redirection', exact: false },
    { path: '/dynamic', exact: false }
  ],
  trailer: [ 'sections', 'navInfo' ]
}
