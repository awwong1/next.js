const serverExports = {
  NextRequest: require('@awwong1/next/dist/server/web/spec-extension/request')
    .NextRequest,
  NextResponse: require('@awwong1/next/dist/server/web/spec-extension/response')
    .NextResponse,
  ImageResponse:
    require('@awwong1/next/dist/server/web/spec-extension/image-response')
      .ImageResponse,
  userAgentFromString:
    require('@awwong1/next/dist/server/web/spec-extension/user-agent')
      .userAgentFromString,
  userAgent: require('@awwong1/next/dist/server/web/spec-extension/user-agent')
    .userAgent,
  URLPattern:
    require('@awwong1/next/dist/server/web/spec-extension/url-pattern')
      .URLPattern,
}

// https://nodejs.org/api/esm.html#commonjs-namespaces
// When importing CommonJS modules, the module.exports object is provided as the default export
module.exports = serverExports

// make import { xxx } from 'next/server' work
exports.NextRequest = serverExports.NextRequest
exports.NextResponse = serverExports.NextResponse
exports.ImageResponse = serverExports.ImageResponse
exports.userAgentFromString = serverExports.userAgentFromString
exports.userAgent = serverExports.userAgent
exports.URLPattern = serverExports.URLPattern
