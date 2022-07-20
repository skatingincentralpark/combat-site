/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;

module.exports = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      topLevelImportPaths: [],
      meaninglessFileNames: [],
      cssProp: true,
      namespace: "",
      // Not supported yet.
      minify: true,
      // Not supported yet.
      transpileTemplateLiterals: true,
      // Not supported yet.
      pure: true,
    },
  },
  reactStrictMode: true,
  images: {},
};
