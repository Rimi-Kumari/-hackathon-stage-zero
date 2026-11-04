export function GET() {
  return Response.json({
    status: 'ok',
    teamId: 'Usual Suspects',
    message: 'Backend connected successfully!'
  });
}
