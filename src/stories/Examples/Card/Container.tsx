import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div style={{ display: 'grid', placeItems: 'center', background: 'peru', padding: '2rem' }}>
      {children}
    </div>)
}
