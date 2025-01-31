export async function GET(request) {
  const url = new URL(request.url);
  const errorType = url.searchParams.get("type");

  switch (errorType) {
    case "400":
      return new Response(null, { status: 400 });
    case "401":
      return new Response(null, { status: 401 });
    case "403":
      return new Response(null, { status: 403 });
    case "500":
      return new Response(null, { status: 500 });
    case "503":
      return new Response(null, { status: 503 });
    default:
      return new Response(null, { status: 404 });
  }
}
