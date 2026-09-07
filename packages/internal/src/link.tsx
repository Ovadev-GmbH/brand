// The library renders links in three places (NameCell, Button, Stats) and
// does not know which router the app uses, or whether the app rewrites
// addresses before they reach the router. So the link is a slot: the app
// hands its own component to <UiProvider>, and every link in here renders
// through it. Without a provider a plain <a> is used, which is right for a
// static page and wrong for a router app, where a full reload would replace
// a client-side navigation.

import * as React from "react";

export type LinkProps = {
  href: string;
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

export type LinkComponent = React.ComponentType<LinkProps>;

function DefaultLink({ href, ...rest }: LinkProps) {
  return <a href={href} {...rest} />;
}

const LinkContext = React.createContext<LinkComponent>(DefaultLink);

export function UiProvider({ link, children }: { link: LinkComponent; children: React.ReactNode }) {
  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
}

/** The app's link component, or a plain <a> when no provider is mounted. */
export function useLink(): LinkComponent {
  return React.useContext(LinkContext);
}
