/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface BpQrCode {
      'animateQRCode': (animation?: any) => void;
      'contents': string;
      'getModuleCount': () => number;
      'legacy': boolean;
      'maskXToYRatio': number;
      'moduleColor': string;
      'positionCenterColor': string;
      'positionRingColor': string;
      'protocol': string;
    }
  }

  interface HTMLBpQrCodeElement extends StencilComponents.BpQrCode, HTMLStencilElement {}

  var HTMLBpQrCodeElement: {
    prototype: HTMLBpQrCodeElement;
    new (): HTMLBpQrCodeElement;
  };
  interface HTMLElementTagNameMap {
    'bp-qr-code': HTMLBpQrCodeElement;
  }
  interface ElementTagNameMap {
    'bp-qr-code': HTMLBpQrCodeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'bp-qr-code': JSXElements.BpQrCodeAttributes;
    }
  }
  namespace JSXElements {
    export interface BpQrCodeAttributes extends HTMLAttributes {
      'contents'?: string;
      'legacy'?: boolean;
      'maskXToYRatio'?: number;
      'moduleColor'?: string;
      'positionCenterColor'?: string;
      'positionRingColor'?: string;
      'protocol'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;