import WpApiClient, { DefaultEndpoint } from 'wordpress-api-client'

import { Project } from '@/lib/wp/types'

export class WpClient extends WpApiClient {
  constructor() {
    super('https://cms.azazahamed.com', {
      onError: (error) => {
        throw new Error(error)
      },
    })
  }

  public projects(): DefaultEndpoint<Project> {
    return this.addPostType<Project>('wp/v2/projects')
  }
}
