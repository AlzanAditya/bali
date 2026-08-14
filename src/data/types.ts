export type PageData = {
  id: string;
  path: string;
  file: string;
  title: string;
  rootClass: string;
  meta: Record<string, string>[];
  links: Record<string, unknown>[];
  jsonLd: string[];
  inlineScripts: string[];
  inlineStyles: string[];
  bodyHtml: string;
  emptySource: boolean;
};
