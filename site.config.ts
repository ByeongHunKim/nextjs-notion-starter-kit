import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '6babe93281d6476995372b29f7b1915c',
  rootNotionSpaceId: '924e83e5-b1a4-43f3-a09a-f18dcfc53d26',

  name: 'meiko',
  domain: 'meiko',
  author: 'Meiko',
  description: 'Personal site of Meiko',

  twitter: '',
  github: 'ByeongHunKim',
  linkedin: 'byeonghun-kim-bb19bb236',

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,

  pageUrlOverrides: {
    '/action-1': 'ade7ff2b8e7a4b39b0a43be96f141359',
    '/action-2': 'bdc2c8d7e64f4dfe99f404bb0e6983bd',
    '/action-3': '60073bb6b8d942f69be451456abe8a3d'
  }
})
