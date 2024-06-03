import { ComponentType, ReactElement, ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { RenderOptions, RenderResult, render } from "@testing-library/react";
import React from "react";


const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => {
  function Wrapper({ children }: { children: ReactNode }): ReactElement {
    return <ChakraProvider>{children}</ChakraProvider>;
  }

  const returns = render(ui, {
    wrapper: Wrapper as ComponentType,
    ...options,
  });

  return { ...returns };
};

export default renderWithProviders;
