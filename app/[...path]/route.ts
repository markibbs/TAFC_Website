const pitcheroRoot = 'https://www.pitchero.com';

const pitcheroAccountPaths = new Set(['account', 'login', 'register', 'user-login']);

function pitcheroDestination(request: Request, path: string[]) {
  const incomingUrl = new URL(request.url);
  const safePath = path.map(encodeURIComponent).join('/');
  const firstSegment = path[0]?.toLowerCase();

  const destination = safePath.startsWith('clubs/teddingtonathleticfc2') || pitcheroAccountPaths.has(firstSegment)
    ? new URL(`/${safePath}`, pitcheroRoot)
    : new URL(`/clubs/teddingtonathleticfc2/${safePath}`, pitcheroRoot);

  destination.search = incomingUrl.search;
  return destination;
}

export async function GET(request: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  return Response.redirect(pitcheroDestination(request, path), 302);
}

export async function HEAD(request: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  return Response.redirect(pitcheroDestination(request, path), 302);
}
