/*
 * Credits: https://github.com/ndimatteo/HULL
 * This Hook listens to when the route is changing and returns a boolean
 */

import { useEffect, useState } from "react";
import Router from "next/router";
import { deviceIsBrowser } from "@lib/helpers";
import { pageTransitionSpeed } from "@lib/animate";

function useIsLoading() {
  const [loading, SetLoading] = useState(false);

  // Trigger our loading class
  useEffect(() => {
    if (deviceIsBrowser) {
      document.documentElement.classList.toggle("is-loading", loading);
    }
  }, [loading]);

  useEffect(() => {
    Router.events.on("routeChangeStart", (_, { shallow }) => {
      // Bail if we're just changing URL parameters
      if (shallow) return;

      SetLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setTimeout(() => SetLoading(false), pageTransitionSpeed);
    });

    Router.events.on("routeChangeError", () => {
      SetLoading(false);
    });
  }, []);

  return loading;
}

export default useIsLoading;
