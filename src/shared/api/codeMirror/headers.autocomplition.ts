import { CompletionContext } from '@codemirror/autocomplete';

export const headersAutocomplition = (context: CompletionContext) => {
  const word = context.matchBefore(/(?<!([:\w]\s*))("\w*)/);
  if (!word) {
    return null;
  }

  if (word.from === word.to && !context.explicit) {
    return null;
  }

  return {
    from: word.from,
    options: [
      {
        label: '"WWW-Authenticate',
        detail: 'header',
        info: 'The HTTP WWW-Authenticate response header defines the HTTP authentication methods ("challenges") that might be used to gain access to a specific resource.'
      },
      {
        label: '"Authorization',
        detail: 'header',
        info: 'The HTTP Authorization request header can be used to provide credentials that authenticate a user agent with a server, allowing access to a protected resource.'
      },
      {
        label: '"Cache-Control',
        detail: 'header',
        info: 'The Cache-Control HTTP header field holds directives (instructions) — in both requests and responses — that control caching in browsers and shared caches (e.g. Proxies, CDNs).'
      },
      {
        label: '"Connection',
        detail: 'header',
        info: 'The Connection general header controls whether the network connection stays open after the current transaction finishes.'
      },
      {
        label: '"Keep-Alive',
        detail: 'header',
        info: 'The Keep-Alive general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests.'
      },
      {
        label: '"Access-Control-Allow-Origin',
        detail: 'header',
        info: 'The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.'
      },
      {
        label: '"Access-Control-Allow-Credentials',
        detail: 'header',
        info: 'The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to the frontend JavaScript code when the request`s credentials mode (Request.credentials) is include.'
      },
      {
        label: '"Access-Control-Allow-Headers',
        detail: 'header',
        info: 'The Access-Control-Allow-Headers response header is used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request.'
      },
      {
        label: '"Access-Control-Allow-Methods',
        detail: 'header',
        info: 'The Access-Control-Allow-Methods response header specifies one or more methods allowed when accessing a resource in response to a preflight request.'
      },
      {
        label: '"Access-Control-Expose-Headers',
        detail: 'header',
        info: 'The Access-Control-Expose-Headers response header allows a server to indicate which response headers should be made available to scripts running in the browser, in response to a cross-origin request.'
      },
      {
        label: '"Access-Control-Max-Age',
        detail: 'header',
        info: 'The Access-Control-Max-Age response header indicates how long the results of a preflight request (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers headers) can be cached.'
      },
      {
        label: '"Access-Control-Request-Headers',
        detail: 'header',
        info: 'The Access-Control-Request-Headers request header is used by browsers when issuing a preflight request to let the server know which HTTP headers the client might send when the actual request is made (such as with setRequestHeader()). The complementary server-side header of Access-Control-Allow-Headers will answer this browser-side header.'
      },
      {
        label: '"Access-Control-Request-Method',
        detail: 'header',
        info: 'The Access-Control-Request-Method request header is used by browsers when issuing a preflight request, to let the server know which HTTP method will be used when the actual request is made. This header is necessary as the preflight request is always an OPTIONS and doesn`t use the same method as the actual request.'
      }
    ]
  };
};
