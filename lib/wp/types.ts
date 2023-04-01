export interface ProjectFields {
  project_name: string
  short_description: string
  icon: string
  images: string[] | boolean
  featured_image: string
  description: string
  github: string
  live_link: string
  work_in_progress: 'Yes' | 'No'
}

// Project type is a union of ProjectFields and WP_REST_API_Post
export type Project = ProjectFields & WP_REST_API_Post

export type WP_REST_API_Date_Time = string
export const enum WP_Post_Status_Name {
  publish = 'publish',
  draft = 'draft',
  auto_draft = 'auto-draft',
  inherit = 'inherit',
  pending = 'pending',
  future = 'future',
  trash = 'trash',
  private = 'private',
}
export const enum WP_Post_Type_Name {
  post = 'post',
  page = 'page',
  attachment = 'attachment',
  revision = 'revision',
  nav_menu_item = 'nav_menu_item',
  custom_css = 'custom_css',
  customize_changeset = 'customize_changeset',
  oembed_cache = 'oembed_cache',
  user_request = 'user_request',
  wp_block = 'wp_block',
}
export const enum WP_Post_Comment_Status_Name {
  open = 'open',
  closed = 'closed',
}
export const enum WP_Post_Format_Name {
  aside = 'aside',
  audio = 'audio',
  chat = 'chat',
  gallery = 'gallery',
  image = 'image',
  link = 'link',
  quote = 'quote',
  standard = 'standard',
  status = 'status',
  video = 'video',
}
export interface WP_REST_API_Object_Links {
  [k: string]: {
    href: string
    embeddable?: boolean
    [k: string]: unknown
  }[]
}
export interface WP_REST_API_Post {
  /**
   * JSON schema definition.
   */
  $schema?: string
  /**
   * The date the post was published, in the site's timezone.
   */
  date: WP_REST_API_Date_Time
  /**
   * The date the post was published, as GMT.
   */
  date_gmt: WP_REST_API_Date_Time
  /**
   * The globally unique identifier for the post.
   */
  guid: {
    /**
     * GUID for the post, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string
    /**
     * GUID for the post, transformed for display.
     */
    rendered: string
  }
  /**
   * Unique identifier for the post.
   */
  id: number
  /**
   * URL to the post.
   */
  link: string
  /**
   * The date the post was last modified, in the site's timezone.
   */
  modified: WP_REST_API_Date_Time
  /**
   * The date the post was last modified, as GMT.
   */
  modified_gmt: WP_REST_API_Date_Time
  /**
   * An alphanumeric identifier for the post unique to its type.
   */
  slug: string
  /**
   * A named status for the post.
   */
  status: WP_Post_Status_Name | string
  /**
   * Type of Post for the post.
   */
  type: WP_Post_Type_Name | string
  /**
   * A password to protect access to the content and excerpt. Only present when using the 'edit' context.
   */
  password?: string
  /**
   * Permalink template for the post. Only present when using the 'edit' context and the post type is public.
   */
  permalink_template?: string
  /**
   * Slug automatically generated from the post title. Only present when using the 'edit' context and the post type is public.
   */
  generated_slug?: string
  /**
   * The ID for the parent of the post. Only present for hierarchical post types.
   */
  parent?: number
  /**
   * The title for the post.
   */
  title: {
    /**
     * Title for the post, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string
    /**
     * HTML title for the post, transformed for display.
     */
    rendered: string
  }
  /**
   * The content for the post.
   */
  content: {
    /**
     * Content for the post, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string
    /**
     * HTML content for the post, transformed for display.
     */
    rendered: string
    /**
     * Version of the content block format used by the post. Only present when using the 'edit' context.
     */
    block_version?: number
    /**
     * Whether the content is protected with a password.
     */
    protected: boolean
  }
  /**
   * The ID for the author of the post.
   */
  author: number
  /**
   * The excerpt for the post.
   */
  excerpt: {
    /**
     * Excerpt for the post, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string
    /**
     * HTML excerpt for the post, transformed for display.
     */
    rendered: string
    /**
     * Whether the excerpt is protected with a password.
     */
    protected: boolean
  }
  /**
   * The ID of the featured media for the post.
   */
  featured_media?: number
  /**
   * Whether or not comments are open on the post.
   */
  comment_status: WP_Post_Comment_Status_Name
  /**
   * Whether or not the post can be pinged.
   */
  ping_status: WP_Post_Comment_Status_Name
  /**
   * The format for the post.
   */
  format?: WP_Post_Format_Name
  /**
   * Meta fields.
   */
  meta:
    | []
    | {
        [k: string]: unknown
      }
  /**
   * Whether or not the post should be treated as sticky. Only present for the 'post' post type.
   */
  sticky?: boolean
  /**
   * The theme file to use to display the post.
   */
  template?: string
  /**
   * The terms assigned to the post in the category taxonomy. Only present for post types that support categories.
   */
  categories?: number[]
  /**
   * The terms assigned to the post in the post_tag taxonomy. Only present for post types that support tags.
   */
  tags?: number[]
  _links: WP_REST_API_Object_Links
  /**
   * The embedded representation of relations. Only present when the '_embed' query parameter is set.
   */
  _embedded?: {
    /**
     * The author of the post.
     */
    author: unknown[]
    /**
     * The replies to the post (comments, pingbacks, trackbacks).
     */
    replies?: unknown[]
    /**
     * The taxonomy terms for the post.
     */
    'wp:term'?: unknown[]
    /**
     * The featured image post.
     */
    'wp:featuredmedia'?: unknown[]
    /**
     * The parent post.
     */
    up?: unknown[]
    [k: string]: unknown
  }
  [k: string]: unknown
}
