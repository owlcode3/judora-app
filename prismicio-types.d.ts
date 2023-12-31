// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | ContactUsSlice
  | OurProjectsSlice
  | ImagesSlice
  | CorporateTargetSlice
  | JudoraGroupSlice
  | OperationsSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Our Service → List*
 */
export interface OurServiceDocumentDataListItem {
  /**
   * List Item field in *Our Service → List*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_service.list[].list_item
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  list_item: prismic.RichTextField;
}

/**
 * Content for Our Service documents
 */
interface OurServiceDocumentData {
  /**
   * Title field in *Our Service*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_service.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * List field in *Our Service*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: our_service.list[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  list: prismic.GroupField<Simplify<OurServiceDocumentDataListItem>>;
}

/**
 * Our Service document from Prismic
 *
 * - **API ID**: `our_service`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type OurServiceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<OurServiceDocumentData>,
    "our_service",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | GetInTouchSlice
  | OurHistorySlice
  | OperationsSlice
  | ServicesOperationSlice
  | ContactUsSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Hero Link*
 */
export interface SettingsDocumentDataHeroLinkItem {
  /**
   * Link field in *Settings → Hero Link*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_link[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Hero Link*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_link[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Hero Image*
 */
export interface SettingsDocumentDataHeroImageItem {
  /**
   * Image field in *Settings → Hero Image*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_image[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *Settings → Hero Image*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_image[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Item in *Settings → Footer Our services*
 */
export interface SettingsDocumentDataFooterOurServicesItem {
  /**
   * label field in *Settings → Footer Our services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_our_services[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Footer Contact Details*
 */
export interface SettingsDocumentDataFooterContactDetailsItem {
  /**
   * Label field in *Settings → Footer Contact Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_contact_details[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Footer Social Media Links*
 */
export interface SettingsDocumentDataFooterSocialMediaLinksItem {
  /**
   * Image field in *Settings → Footer Social Media Links*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_social_media_links[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Label field in *Settings → Footer Social Media Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_social_media_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link Href field in *Settings → Footer Social Media Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_social_media_links[].link_href
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_href: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  site_logo: prismic.ImageField<never>;

  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * Hero Background Image1 field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_background_image1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_background_image1: prismic.ImageField<never>;

  /**
   * Hero Background Image2 field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_background_image2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_background_image2: prismic.ImageField<never>;

  /**
   * Hero Background Image3 field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_background_image3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_background_image3: prismic.ImageField<never>;

  /**
   * Hero Background Image4 field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_background_image4
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_background_image4: prismic.ImageField<never>;

  /**
   * Hero Background Image5 field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_background_image5
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_background_image5: prismic.ImageField<never>;

  /**
   * Hero Heading field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hero_heading: prismic.TitleField;

  /**
   * Hero Link field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_link[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  hero_link: prismic.GroupField<Simplify<SettingsDocumentDataHeroLinkItem>>;

  /**
   * Hero Image field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.hero_image[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  hero_image: prismic.GroupField<Simplify<SettingsDocumentDataHeroImageItem>>;

  /**
   * Footer Sitename Dotcom field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_sitename_dotcom
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footer_sitename_dotcom: prismic.KeyTextField;

  /**
   * Footer All Right Reserved field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_all_right_reserved
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footer_all_right_reserved: prismic.KeyTextField;

  /**
   * Footer Designed By field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_designed_by
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footer_designed_by: prismic.KeyTextField;

  /**
   * Footer Logo Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_logo_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  footer_logo_image: prismic.ImageField<never>;

  /**
   * Footer Our services field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_our_services[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_our_services: prismic.GroupField<
    Simplify<SettingsDocumentDataFooterOurServicesItem>
  >;

  /**
   * Footer Contact Details field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_contact_details[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_contact_details: prismic.GroupField<
    Simplify<SettingsDocumentDataFooterContactDetailsItem>
  >;

  /**
   * Footer Social Media Links field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_social_media_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_social_media_links: prismic.GroupField<
    Simplify<SettingsDocumentDataFooterSocialMediaLinksItem>
  >;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | OurServiceDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *ContactUs → Primary*
 */
export interface ContactUsSliceDefaultPrimary {
  /**
   * Bg Image field in *ContactUs → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.primary.bg_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bg_image: prismic.ImageField<never>;

  /**
   * Image field in *ContactUs → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ContactUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactUsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactUs*
 */
type ContactUsSliceVariation = ContactUsSliceDefault;

/**
 * ContactUs Shared Slice
 *
 * - **API ID**: `contact_us`
 * - **Description**: ContactUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsSlice = prismic.SharedSlice<
  "contact_us",
  ContactUsSliceVariation
>;

/**
 * Primary content in *CorporateTarget → Primary*
 */
export interface CorporateTargetSliceDefaultPrimary {
  /**
   * Image Big field in *CorporateTarget → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: corporate_target.primary.image_big
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_big: prismic.ImageField<never>;

  /**
   * Image Small field in *CorporateTarget → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: corporate_target.primary.image_small
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_small: prismic.ImageField<never>;
}

/**
 * Primary content in *CorporateTarget → Items*
 */
export interface CorporateTargetSliceDefaultItem {
  /**
   * Heading field in *CorporateTarget → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: corporate_target.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Paragraph field in *CorporateTarget → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: corporate_target.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;
}

/**
 * Default variation for CorporateTarget Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CorporateTargetSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CorporateTargetSliceDefaultPrimary>,
  Simplify<CorporateTargetSliceDefaultItem>
>;

/**
 * Slice variation for *CorporateTarget*
 */
type CorporateTargetSliceVariation = CorporateTargetSliceDefault;

/**
 * CorporateTarget Shared Slice
 *
 * - **API ID**: `corporate_target`
 * - **Description**: CorporateTarget
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CorporateTargetSlice = prismic.SharedSlice<
  "corporate_target",
  CorporateTargetSliceVariation
>;

/**
 * Primary content in *GetInTouch → Primary*
 */
export interface GetInTouchSliceDefaultPrimary {
  /**
   * Text field in *GetInTouch → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *GetInTouch → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * SurName field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.surname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  surname: prismic.KeyTextField;

  /**
   * Email field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Phone Number field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.phone_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number: prismic.KeyTextField;

  /**
   * Company Name field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.company_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField;

  /**
   * Select Date field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.select_date
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  select_date: prismic.KeyTextField;

  /**
   * Pre Order field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.pre_order
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pre_order: prismic.KeyTextField;

  /**
   * Send field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.send
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  send: prismic.KeyTextField;

  /**
   * Call Us field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.call_us
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  call_us: prismic.KeyTextField;

  /**
   * Phone Number To Call field in *GetInTouch → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_in_touch.primary.phone_number_to_call
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number_to_call: prismic.KeyTextField;

  /**
   * Blank Form field in *GetInTouch → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: get_in_touch.primary.blank_form
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  blank_form: prismic.BooleanField;
}

/**
 * Default variation for GetInTouch Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GetInTouchSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GetInTouchSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *GetInTouch*
 */
type GetInTouchSliceVariation = GetInTouchSliceDefault;

/**
 * GetInTouch Shared Slice
 *
 * - **API ID**: `get_in_touch`
 * - **Description**: GetInTouch
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GetInTouchSlice = prismic.SharedSlice<
  "get_in_touch",
  GetInTouchSliceVariation
>;

/**
 * Primary content in *Images → Items*
 */
export interface ImagesSliceDefaultItem {
  /**
   * Image field in *Images → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Images Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImagesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ImagesSliceDefaultItem>
>;

/**
 * Slice variation for *Images*
 */
type ImagesSliceVariation = ImagesSliceDefault;

/**
 * Images Shared Slice
 *
 * - **API ID**: `images`
 * - **Description**: Images
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImagesSlice = prismic.SharedSlice<"images", ImagesSliceVariation>;

/**
 * Primary content in *JudoraGroup → Primary*
 */
export interface JudoraGroupSliceDefaultPrimary {
  /**
   * Heading field in *JudoraGroup → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: judora_group.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;
}

/**
 * Primary content in *JudoraGroup → Items*
 */
export interface JudoraGroupSliceDefaultItem {
  /**
   * Image field in *JudoraGroup → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: judora_group.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *JudoraGroup → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: judora_group.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for JudoraGroup Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type JudoraGroupSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<JudoraGroupSliceDefaultPrimary>,
  Simplify<JudoraGroupSliceDefaultItem>
>;

/**
 * Slice variation for *JudoraGroup*
 */
type JudoraGroupSliceVariation = JudoraGroupSliceDefault;

/**
 * JudoraGroup Shared Slice
 *
 * - **API ID**: `judora_group`
 * - **Description**: JudoraGroup
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type JudoraGroupSlice = prismic.SharedSlice<
  "judora_group",
  JudoraGroupSliceVariation
>;

/**
 * Primary content in *Operations → Items*
 */
export interface OperationsSliceDefaultItem {
  /**
   * Image field in *Operations → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: operations.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *Operations → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: operations.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for Operations Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OperationsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<OperationsSliceDefaultItem>
>;

/**
 * Slice variation for *Operations*
 */
type OperationsSliceVariation = OperationsSliceDefault;

/**
 * Operations Shared Slice
 *
 * - **API ID**: `operations`
 * - **Description**: Operations
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OperationsSlice = prismic.SharedSlice<
  "operations",
  OperationsSliceVariation
>;

/**
 * Primary content in *OurHistory → Primary*
 */
export interface OurHistorySliceDefaultPrimary {
  /**
   * Image1 field in *OurHistory → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: our_history.primary.image1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image1: prismic.ImageField<never>;

  /**
   * Image2 field in *OurHistory → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: our_history.primary.image2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image2: prismic.ImageField<never>;
}

/**
 * Primary content in *OurHistory → Items*
 */
export interface OurHistorySliceDefaultItem {
  /**
   * Heading field in *OurHistory → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_history.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Paragraph field in *OurHistory → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_history.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;
}

/**
 * Default variation for OurHistory Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurHistorySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OurHistorySliceDefaultPrimary>,
  Simplify<OurHistorySliceDefaultItem>
>;

/**
 * Slice variation for *OurHistory*
 */
type OurHistorySliceVariation = OurHistorySliceDefault;

/**
 * OurHistory Shared Slice
 *
 * - **API ID**: `our_history`
 * - **Description**: OurHistory
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurHistorySlice = prismic.SharedSlice<
  "our_history",
  OurHistorySliceVariation
>;

/**
 * Primary content in *OurProjects → Primary*
 */
export interface OurProjectsSliceDefaultPrimary {
  /**
   * Text field in *OurProjects → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_projects.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Image field in *OurProjects → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: our_projects.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *OurProjects → Items*
 */
export interface OurProjectsSliceDefaultItem {
  /**
   * Image Round field in *OurProjects → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: our_projects.items[].image_round
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_round: prismic.ImageField<never>;

  /**
   * Bg Image field in *OurProjects → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: our_projects.items[].bg_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bg_image: prismic.ImageField<never>;
}

/**
 * Default variation for OurProjects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurProjectsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OurProjectsSliceDefaultPrimary>,
  Simplify<OurProjectsSliceDefaultItem>
>;

/**
 * Slice variation for *OurProjects*
 */
type OurProjectsSliceVariation = OurProjectsSliceDefault;

/**
 * OurProjects Shared Slice
 *
 * - **API ID**: `our_projects`
 * - **Description**: OurProjects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurProjectsSlice = prismic.SharedSlice<
  "our_projects",
  OurProjectsSliceVariation
>;

/**
 * Primary content in *ServicesOperation → Primary*
 */
export interface ServicesOperationSliceDefaultPrimary {
  /**
   * Image field in *ServicesOperation → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services_operation.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Paragraph field in *ServicesOperation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_operation.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;
}

/**
 * Primary content in *ServicesOperation → Items*
 */
export interface ServicesOperationSliceDefaultItem {
  /**
   * Paragraph field in *ServicesOperation → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_operation.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * Heading field in *ServicesOperation → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_operation.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Default variation for ServicesOperation Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesOperationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesOperationSliceDefaultPrimary>,
  Simplify<ServicesOperationSliceDefaultItem>
>;

/**
 * Slice variation for *ServicesOperation*
 */
type ServicesOperationSliceVariation = ServicesOperationSliceDefault;

/**
 * ServicesOperation Shared Slice
 *
 * - **API ID**: `services_operation`
 * - **Description**: ServicesOperation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesOperationSlice = prismic.SharedSlice<
  "services_operation",
  ServicesOperationSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      OurServiceDocument,
      OurServiceDocumentData,
      OurServiceDocumentDataListItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataHeroLinkItem,
      SettingsDocumentDataHeroImageItem,
      SettingsDocumentDataFooterOurServicesItem,
      SettingsDocumentDataFooterContactDetailsItem,
      SettingsDocumentDataFooterSocialMediaLinksItem,
      AllDocumentTypes,
      ContactUsSlice,
      ContactUsSliceDefaultPrimary,
      ContactUsSliceVariation,
      ContactUsSliceDefault,
      CorporateTargetSlice,
      CorporateTargetSliceDefaultPrimary,
      CorporateTargetSliceDefaultItem,
      CorporateTargetSliceVariation,
      CorporateTargetSliceDefault,
      GetInTouchSlice,
      GetInTouchSliceDefaultPrimary,
      GetInTouchSliceVariation,
      GetInTouchSliceDefault,
      ImagesSlice,
      ImagesSliceDefaultItem,
      ImagesSliceVariation,
      ImagesSliceDefault,
      JudoraGroupSlice,
      JudoraGroupSliceDefaultPrimary,
      JudoraGroupSliceDefaultItem,
      JudoraGroupSliceVariation,
      JudoraGroupSliceDefault,
      OperationsSlice,
      OperationsSliceDefaultItem,
      OperationsSliceVariation,
      OperationsSliceDefault,
      OurHistorySlice,
      OurHistorySliceDefaultPrimary,
      OurHistorySliceDefaultItem,
      OurHistorySliceVariation,
      OurHistorySliceDefault,
      OurProjectsSlice,
      OurProjectsSliceDefaultPrimary,
      OurProjectsSliceDefaultItem,
      OurProjectsSliceVariation,
      OurProjectsSliceDefault,
      ServicesOperationSlice,
      ServicesOperationSliceDefaultPrimary,
      ServicesOperationSliceDefaultItem,
      ServicesOperationSliceVariation,
      ServicesOperationSliceDefault,
    };
  }
}
